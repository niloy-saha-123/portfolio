import { AbsoluteFill, Img, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { staticFile } from 'remotion';

export const JumpingAnimation: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    // Jump arc - anticipation, jump, land
    const jumpHeight = interpolate(
        frame,
        [0, 8, 12, 25, 35, 45],
        [0, 5, 0, -80, 0, 0], // Crouch, push off, peak, land
        { extrapolateRight: 'clamp' }
    );

    // Squash and stretch
    const scaleY = interpolate(
        frame,
        [0, 8, 12, 25, 35, 40, 45],
        [1, 0.85, 1.1, 1.15, 0.8, 1.05, 1], // Crouch, stretch up, peak stretch, land squash, settle
        { extrapolateRight: 'clamp' }
    );

    const scaleX = interpolate(
        frame,
        [0, 8, 12, 25, 35, 40, 45],
        [1, 1.1, 0.9, 0.85, 1.15, 0.95, 1],
        { extrapolateRight: 'clamp' }
    );

    // Rotation during jump
    const rotation = interpolate(
        frame,
        [0, 8, 20, 35, 45],
        [0, -5, 3, -3, 0],
        { extrapolateRight: 'clamp' }
    );

    // Arms up simulation
    const armsUp = interpolate(
        frame,
        [12, 25, 35],
        [0, -5, 0],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
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
            translateY(${jumpHeight}px)
            scaleX(${scaleX})
            scaleY(${scaleY})
            rotate(${rotation}deg)
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
