#!/usr/bin/env python3
"""Remove video background using AI (rembg) and reassemble as WebM with alpha."""

import os
import subprocess
import sys
from pathlib import Path
from PIL import Image
from rembg import remove

VIDEO_IN = "public/portfolio_video.mp4"
VIDEO_OUT = "public/character.webm"
FRAMES_DIR = "/tmp/portfolio_frames"
CLEAN_DIR = "/tmp/portfolio_clean"
SPEED_FACTOR = 0.67  # 1.5x speed


def main():
    # Create temp dirs
    os.makedirs(FRAMES_DIR, exist_ok=True)
    os.makedirs(CLEAN_DIR, exist_ok=True)

    # 1. Extract frames from MP4
    print("🎬 Extracting frames...")
    subprocess.run([
        "ffmpeg", "-y", "-i", VIDEO_IN,
        f"{FRAMES_DIR}/frame_%04d.png"
    ], check=True, capture_output=True)

    frames = sorted(Path(FRAMES_DIR).glob("frame_*.png"))
    total = len(frames)
    print(f"   Found {total} frames")

    # 2. Remove background from each frame using AI
    print("🤖 Removing backgrounds with AI (this may take a minute)...")
    for i, frame_path in enumerate(frames):
        img = Image.open(frame_path)
        result = remove(img)
        out_path = Path(CLEAN_DIR) / frame_path.name
        result.save(out_path)
        pct = (i + 1) / total * 100
        print(f"   [{i+1}/{total}] {pct:.0f}%", end="\r")

    print(f"\n   ✅ Processed {total} frames")

    # 3. Reassemble into WebM with alpha + speed up
    print("🎞️  Assembling WebM with transparency...")
    subprocess.run([
        "ffmpeg", "-y",
        "-framerate", "24",
        "-i", f"{CLEAN_DIR}/frame_%04d.png",
        "-filter:v", f"setpts={SPEED_FACTOR}*PTS",
        "-c:v", "libvpx-vp9",
        "-pix_fmt", "yuva420p",
        "-b:v", "2M",
        "-auto-alt-ref", "0",
        "-an",
        VIDEO_OUT
    ], check=True, capture_output=True)

    size_mb = os.path.getsize(VIDEO_OUT) / (1024 * 1024)
    print(f"   ✅ Output: {VIDEO_OUT} ({size_mb:.1f} MB)")

    # Cleanup
    import shutil
    shutil.rmtree(FRAMES_DIR, ignore_errors=True)
    shutil.rmtree(CLEAN_DIR, ignore_errors=True)
    print("🧹 Cleaned up temp files")
    print("✨ Done!")


if __name__ == "__main__":
    main()
