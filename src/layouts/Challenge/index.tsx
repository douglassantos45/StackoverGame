import { useRef } from 'react';
import { useChallengeContext } from '../../contexts/challengeContext';
import { useModalContext } from '../../contexts/modalContext';
import { useProblemContext } from '../../contexts/problemContext';
import { HeaderBar } from './HeaderBar';
import { Modal } from './Model';
import { Problem } from './Problem';
import { VerifyButton } from './VerifyButton';

const problems = JSON.parse(localStorage.getItem('react.challenge.1') as any);

const CHALLENGE_NUMBER = problems.length;

export const Challenge = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const {
    next,
    nextProblem,
    handleCompleteProblem,
    challengesId,
    handleSaveChallengeId,
  } = useProblemContext();
  const { open, isOpen } = useModalContext();
  const barRef = useRef<HTMLDivElement>(null!);

  const correctWords = problems[next].correctWords?.split(',');

  const json = localStorage.getItem('react.challenge.1') as any;
  const data = JSON.parse(json);

  const checkWords = () => {
    const words = JSON.parse(
      localStorage.getItem('react.words') as any
    ) as string[];

    if (words.length <= 0) return alert('Escolha as opções');

    let success = false;
    console.log(correctWords[0].trim(), words[0].trim());

    for (let i = 0; i < words.length; i++) {
      correctWords[i].trim() === words[i].trim()
        ? (success = true)
        : (success = false);
    }

    if (success) {
      alert('Você acertou');
    } else {
      alert('Você errou');
    }

    if (next < problems.length - 1) {
      nextProblem();
      open();
    } else {
      handleCompleteProblem();
      handleSaveChallengeId(
        window.location.pathname.replace('/challenge/', '')
      );
      alert('finalizou');
    }
    incrementBar();
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
        <div className="cursor-pointer" onClick={open}>
          <img src="bell-icon.svg" className="absolute right-0 top-8 w-8" />
        </div>
        <Problem problem={data[next]} />
      </main>

      <footer className="flex items-center h-32 justify-end">
        <VerifyButton onClick={checkWords} incrementBar={incrementBar} />
      </footer>

      {isOpen && <Modal description={data[next].description} />}
    </div>
  );
};
