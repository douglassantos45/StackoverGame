import { useRef } from 'react';
import { HeaderBar } from './HeaderBar';
import { Problem } from './Problem';
import { VerifyButton } from './VerifyButton';

const CHALLENGE_NUMBER = 10;

export const Challenge = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const barRef = useRef<HTMLDivElement>(null!);

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
    <div className="flex flex-col max-w-[1440px] h-screen mx-auto">
      <HeaderBar ref={barRef} />

      <main className="relative mt-24 h-full">
        <div className="cursor-pointer">
          <img src="bell-icon.svg" className="absolute right-0 top-8 w-8" />
        </div>
        <Problem />
      </main>

      <footer className="flex items-center h-32 justify-end">
        <VerifyButton incrementBar={incrementBar} />
      </footer>
    </div>
  );
};
