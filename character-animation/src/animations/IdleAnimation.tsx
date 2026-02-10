import { AbsoluteFill, Img, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { staticFile } from 'remotion';

export const IdleAnimation: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Subtle breathing animation - chest expands and contracts
    const breathingScale = interpolate(
        frame,
        [0, 30, 60, 90, 120],
        [1, 1.015, 1, 1.015, 1],
        { extrapolateRight: 'clamp' }
    );

    // Very subtle body sway - like shifting weight
    const sway = interpolate(
        frame,
        [0, 60, 120],
        [0, 2, 0],
        { extrapolateRight: 'clamp' }
    );

    // Subtle head bob
    const headBob = interpolate(
        frame,
        [0, 40, 80, 120],
        [0, -2, 0, -1],
        { extrapolateRight: 'clamp' }
    );

    // Blink effect (quick scale on eyes area - simulated)
    const blinkProgress = interpolate(
        frame,
        [50, 52, 55, 57],
        [1, 0.1, 0.1, 1],
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
            scale(${breathingScale}) 
            translateX(${sway}px)
            translateY(${headBob}px)
          `,
                    transformOrigin: 'center bottom',
                }}
            >
                <Img
                    src={staticFile('character.jpg')}
                    style={{
                        height: '90%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        </AbsoluteFill>
    );
};
