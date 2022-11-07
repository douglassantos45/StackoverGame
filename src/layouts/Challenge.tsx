import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Challenge = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const barRef = useRef<HTMLDivElement>(null!); 
  const challenges = 10;

  const incrementBarRef = () => {
    if (barRef) {
      const divRoot = barRef.current?.getBoundingClientRect().width;
      const maxDivRoot = divRoot;
      const barColor = barRef.current?.children[0] as HTMLDivElement;
      const barColorWith = barColor?.getBoundingClientRect().width;

      if (barColorWith <= maxDivRoot) {
        barColor.style.width = barColorWith + (maxDivRoot / challenges) + 'px';
      } 
    }
  };

  return (
    <div className="flex flex-col max-w-[1440px] h-screen mx-auto">
      <header className="flex items-center gap-5 mt-10">
        <Link to={'/home'}>
          <i className="fa-solid fa-x text-xl cursor-pointer"></i>
        </Link>
        <div ref={barRef} className="w-full h-3 rounded-full bg-gray-800">
          <div className="w-0 h-3 rounded-full bg-purple-700" />
        </div>
      </header>

      <main className="relative mt-24 h-full">
        <div className="cursor-pointer">
          <img src="bell-icon.svg" className="absolute right-0 top-8 w-8" />
        </div>
        <section className="h-full flex flex-col">
          <h1 className="text-2xl">Resolva o problema:</h1>

          <div className="flex flex-col items-center justify-center flex-1 w-full">
            <p>problems</p>
            <p>buttons</p>
          </div>
        </section>
      </main>
      <footer className="flex items-center h-32 justify-end">
        <button
          className="p-4 w-40 border border-purple-700 bg-purple-1000/40 text-lg font-bold rounded-lg"
          onClick={incrementBarRef}
        >
          Verificar
        </button>
      </footer>
    </div>
  );
};
