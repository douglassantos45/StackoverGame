import { useRef } from 'react';
import { useChallengeContext } from '../../contexts/challengeContext';
import { useModalContext } from '../../contexts/modalContext';
import { useProblemContext } from '../../contexts/problemContext';
import { HeaderBar } from './HeaderBar';
import { Modal } from './Model';
import { Problem } from './Problem';
import { VerifyButton } from './VerifyButton';
import { Toaster, toast } from 'react-hot-toast';

export const Challenge = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const {
    next,
    nextProblem,
    handleCompleteProblem,
    resetNext,
    handleSaveChallengeId,
  } = useProblemContext();
  const { open, isOpen } = useModalContext();
  const barRef = useRef<HTMLDivElement>(null!);

  const json = JSON.parse(localStorage.getItem('react.challenges') as any);

  const data =
    json[Number(window.location.pathname.replace('/challenge/', '')) - 1];

  const correctWords = data.problems[next].correctWords?.split(',');
  const CHALLENGE_NUMBER = data.problems && data.problems.length;

  const checkWords = () => {
    const words = JSON.parse(
      localStorage.getItem('react.words') as any
    ) as string[];

    if (words.length <= 0) return toast('Escolha as opções');

    let success = false;

    for (let i = 0; i < words.length; i++) {
      correctWords[i].trim() === words[i].trim()
        ? (success = true)
        : (success = false);
    }

    if (success) {
      toast.success('Você acertou');
    } else {
      toast.error('Você errou');
    }

    if (next < data.problems.length - 1) {
      nextProblem();
      open();
    } else {
      handleCompleteProblem();
      handleSaveChallengeId(
        window.location.pathname.replace('/challenge/', '')
      );
      resetNext();

      toast('Finalizou', {
        style: {
          background: 'green',
          color: 'white',
        },
      });
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
          <img src="/bell-icon.svg" className="absolute right-0 top-8 w-8" />
        </div>
        <Problem problem={data.problems[next]} />
      </main>

      <footer className="flex items-center h-32 justify-end">
        <VerifyButton onClick={checkWords} incrementBar={incrementBar} />
      </footer>

      {isOpen && <Modal description={data.problems[next].description} />}

      <Toaster />
    </div>
  );
};
