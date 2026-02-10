#!/usr/bin/env python3
"""Generate glitchy NS favicon — white front text, transparent bg, bigger."""
from PIL import Image, ImageDraw, ImageFont
import os

SIZES = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
}

def create_favicon(size):
    """Create a glitchy NS favicon with transparent bg and WHITE front text."""
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))  # Transparent
    draw = ImageDraw.Draw(img)

    # Bigger text — 75% of canvas
    font_size = int(size * 0.75)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Impact.ttf", font_size)
    except:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
        except:
            font = ImageFont.load_default()

    text = "NS"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) // 2 - bbox[0]
    y = (size - th) // 2 - bbox[1]

    offset = max(1, int(size * 0.04))

    # Layer 1: Purple shadow (furthest back)
    draw.text((x + offset * 3, y + offset * 3), text, fill=(155, 93, 229, 200), font=font)
    # Layer 2: Cyan shadow
    draw.text((x + offset * 2, y + offset * 2), text, fill=(0, 212, 255, 220), font=font)
    # Layer 3: Pink shadow
    draw.text((x + offset, y + offset), text, fill=(255, 45, 124, 240), font=font)
    # Layer 4: WHITE front text
    draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)

    return img

def main():
    out_dir = "/Users/niloysaha/IdeaProjects/portfolio2/public"

    for filename, size in SIZES.items():
        img = create_favicon(size)
        path = os.path.join(out_dir, filename)
        img.save(path)
        print(f"✅ {filename} ({size}x{size})")

    sizes_for_ico = [16, 32, 48]
    ico_images = [create_favicon(s) for s in sizes_for_ico]
    ico_path = os.path.join(out_dir, "favicon.ico")
    ico_images[0].save(ico_path, format='ICO', sizes=[(s, s) for s in sizes_for_ico], append_images=ico_images[1:])
    print(f"✅ favicon.ico (multi-size)")
    print("✨ Done — white front NS, transparent bg, bigger!")

if __name__ == "__main__":
    main()
