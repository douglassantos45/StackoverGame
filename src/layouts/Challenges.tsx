import { ReactNode } from 'react';
import { ChallengeCard } from '../components/ChallengeCard';

export const Challenges = () => {
  return (
    <section className="bg-background w-full">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold">Desafios StackOverGame</h1>
        <p className="text-sm text-gray-300 mt-2">
          Melhore seu nível de programação com mini desafios!
        </p>
      </div>
      <Level level={1}>
        <div className="flex flex-wrap mt-10 justify-center gap-10">
        <ChallengeCard
            title=""
            description=""
            completed={true}
            locked={false}
            xp={35}
            image="gpu.png"
          />
          <ChallengeCard
            title=""
            description=""
            completed={false}
            locked={false}
            xp={35}
            image="gpu.png"
          />

          <ChallengeCard
            title=""
            description=""
            completed={false}
            locked={true}
            xp={35}
            image="gpu.png"
          />

          <ChallengeCard
            title=""
            description=""
            completed={false}
            locked={true}
            xp={35}
            image="gpu.png"
          />
        </div>
      </Level>
    </section>
  );
};

type LevelProps = {
  level: number;
  children: ReactNode;
};

const Level = ({ level, children }: LevelProps) => {
  return (
    <section>
      <div className="relative lg:px-36 py-10">
        <div className="bg-gray-400 h-[2px]" />
        <span className="absolute bg-background top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-6">
          Nivel {level}
        </span>
      </div>
      <div className="flex items-center justify-center bg-background mx-auto w-full pb-40">
        {children}
      </div>
    </section>
  );
};
