import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { staticFile } from 'remotion';

export const RunningAnimation: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    // Looping frame for seamless animation
    const loopFrame = frame % durationInFrames;

    // Vertical bounce - running motion
    const verticalBounce = interpolate(
        loopFrame,
        [0, 7, 15, 22, 30],
        [0, -25, 0, -25, 0],
        { extrapolateRight: 'clamp' }
    );

    // Horizontal slight movement
    const horizontalMove = interpolate(
        loopFrame,
        [0, 15, 30],
        [0, 3, 0],
        { extrapolateRight: 'clamp' }
    );

    // Body lean forward
    const lean = interpolate(
        loopFrame,
        [0, 7, 15, 22, 30],
        [8, 5, 8, 5, 8],
        { extrapolateRight: 'clamp' }
    );

    // Arms swing simulation via slight rotation
    const armSwing = interpolate(
        loopFrame,
        [0, 7, 15, 22, 30],
        [-3, 3, -3, 3, -3],
        { extrapolateRight: 'clamp' }
    );

    // Scale squash and stretch
    const scaleY = interpolate(
        loopFrame,
        [0, 7, 15, 22, 30],
        [1, 0.95, 1, 0.95, 1],
        { extrapolateRight: 'clamp' }
    );

    const scaleX = interpolate(
        loopFrame,
        [0, 7, 15, 22, 30],
        [1, 1.03, 1, 1.03, 1],
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
            translateY(${verticalBounce}px)
            translateX(${horizontalMove}px)
            rotate(${lean}deg)
            scaleX(${scaleX})
            scaleY(${scaleY})
          `,
                    transformOrigin: 'center bottom',
                }}
            >
                <Img
                    src={staticFile('character.jpg')}
                    style={{
                        height: '85%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        </AbsoluteFill>
    );
};
