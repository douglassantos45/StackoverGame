import { useRef } from 'react';
import { HeaderBar } from './HeaderBar';
import { problems } from './mock/problems';
import { Problem } from './Problem';
import { VerifyButton } from './VerifyButton';

const CHALLENGE_NUMBER = problems.length;

export const Challenge = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const barRef = useRef<HTMLDivElement>(null!);
  const correctWords = ['if', 'while'];

  const checkWords = () => {
    const words = JSON.parse(localStorage.getItem('react.words') as any);

    let success = false;

    for (let i = 0; i < words.length; i++) {
      correctWords[i] === words[i] ? (success = true) : (success = false);
    }

    if (success) {
      alert('Você acertou');
    } else {
      alert('Você errou');
    }
    return incrementBar();
  };

  const incrementBar = () => {
    if (barRef) {
      const divRoot = barRef.current?.getBoundingClientRect().width;
      const maxDivRoot = divRoot;
      const barColor = barRef.current?.children[0] as HTMLDivElement;
      const barColorWith = barColor?.getBoundingClientRect().width;

      if (barColorWith < maxDivRoot) {
        barColor.style.width =
          barColorWith + maxDivRoot / CHALLENGE_NUMBER + 'px';
      }
    }
  };

  return (
    <div className="flex flex-col max-w-[1440px] h-screen mx-auto px-12">
      <HeaderBar ref={barRef} />

      <main className="relative mt-24 h-full">
        <div className="cursor-pointer">
          <img src="bell-icon.svg" className="absolute right-0 top-8 w-8" />
        </div>
        <Problem
          problem={{
            id: 1,
            problem: `??(3 === 3) {console.log("acertou")}`,
            description: 'Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools',
            correctWords: ['if'],
            randomWords: ['for', 'while', 'if', 'break', 'i++', 'const', 'forEach'],
            xp: 56,
          }}
        />
      </main>

      <footer className="flex items-center h-32 justify-end">
        <VerifyButton onClick={checkWords} incrementBar={incrementBar} />
      </footer>
    </div>
  );
};
