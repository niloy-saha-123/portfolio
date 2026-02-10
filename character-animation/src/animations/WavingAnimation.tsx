import { AbsoluteFill, Img, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { staticFile } from 'remotion';

export const WavingAnimation: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    // Looping frame
    const loopFrame = frame % durationInFrames;

    // Wave motion - simulated arm swing
    const waveRotation = interpolate(
        loopFrame,
        [0, 10, 20, 30, 40, 50, 60],
        [0, -8, 0, 8, 0, -8, 0],
        { extrapolateRight: 'clamp' }
    );

    // Body excitement - slight bounce
    const excitement = interpolate(
        loopFrame,
        [0, 15, 30, 45, 60],
        [0, -5, 0, -5, 0],
        { extrapolateRight: 'clamp' }
    );

    // Subtle side-to-side
    const sideToSide = interpolate(
        loopFrame,
        [0, 15, 30, 45, 60],
        [-3, 3, -3, 3, -3],
        { extrapolateRight: 'clamp' }
    );

    // Happy tilt
    const tilt = interpolate(
        loopFrame,
        [0, 30, 60],
        [-2, 2, -2],
        { extrapolateRight: 'clamp' }
    );

    // Breathing with excitement
    const breathScale = interpolate(
        loopFrame,
        [0, 30, 60],
        [1, 1.02, 1],
        { extrapolateRight: 'clamp' }
    );

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: `
            translateY(${excitement}px)
            translateX(${sideToSide}px)
            rotate(${tilt}deg)
            scale(${breathScale})
          `,
                    transformOrigin: 'center bottom',
                }}
            >
                <Img
                    src={staticFile('character.jpg')}
                    style={{
                        height: '90%',
                        objectFit: 'contain',
                        transform: `rotate(${waveRotation}deg)`,
                        transformOrigin: 'center center',
                    }}
                />
            </div>
        </AbsoluteFill>
    );
};
