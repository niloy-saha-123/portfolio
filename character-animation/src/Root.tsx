import { Composition } from 'remotion';
import { IdleAnimation } from './animations/IdleAnimation';
import { RunningAnimation } from './animations/RunningAnimation';
import { WavingAnimation } from './animations/WavingAnimation';
import { JumpingAnimation } from './animations/JumpingAnimation';

export const RemotionRoot = () => {
    return (
        <>
            <Composition
                id="IdleAnimation"
                component={IdleAnimation}
                durationInFrames={120} // 4 seconds at 30fps
                fps={30}
                width={400}
                height={500}
            />
            <Composition
                id="RunningAnimation"
                component={RunningAnimation}
                durationInFrames={30} // 1 second loop
                fps={30}
                width={400}
                height={500}
            />
            <Composition
                id="WavingAnimation"
                component={WavingAnimation}
                durationInFrames={60} // 2 second loop
                fps={30}
                width={400}
                height={500}
            />
            <Composition
                id="JumpingAnimation"
                component={JumpingAnimation}
                durationInFrames={45} // 1.5 second
                fps={30}
                width={400}
                height={500}
            />
        </>
    );
};
