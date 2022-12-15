import { collection, getDocs } from 'firebase/firestore';
import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChallengeCard } from '../components/ChallengeCard';
import { useChallengeContext } from '../contexts/challengeContext';
import { useProblemContext } from '../contexts/problemContext';
import { firebaseDB } from '../services/firebaseConfig';

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
          <Link to={'/challenge'}>
            {/* {problems.length > 0 &&
              problems.map((problem) => (
                <ChallengeCard
                  key={problem.id}
                  description={problem.description}
                  completed={problem.completed}
                  locked={problem.locked}
                  title={problem.name}
                  xp={problem.xp}
                  image="gpu.png"
                />
              ))} */}
          </Link>
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
