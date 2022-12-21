import { useEffect, useState } from 'react';
import { useProblemContext } from '../../contexts/problemContext';
import { useModalContext } from '../../contexts/modalContext';

export type ProblemProps = {
  problem: any;
};

export const Problem = ({ problem }: ProblemProps) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const { next } = useProblemContext();

  const { open } = useModalContext();

  const handleSlectWords = (word: string) => {
    if (selectedWords.includes(word)) {
      const wordMatch: string[] = [];
      for (let i = 0; i < selectedWords.length; i++) {
        if (selectedWords[i] !== word) {
          wordMatch.push(selectedWords[i]);
        }
      }

      setSelectedWords(wordMatch);
    } else {
      if (selectedWords.length >= problem.correctWords.split(',').length)
        return;
      setSelectedWords([...selectedWords, word]);
    }
  };

  useEffect(() => {
    localStorage.setItem('react.words', JSON.stringify(selectedWords));
  }, [selectedWords]);

  useEffect(() => {
    setSelectedWords([]);
  }, [next]);

  useEffect(() => open(), []);

  return (
    <section className="h-full flex flex-col">
      <h1 className="text-2xl">Resolva o problema:</h1>

      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <p className="mb-32 text-2xl">{problem?.problem}</p>
        <div className="flex flex-wrap mt-32 gap-2 max-w-md items-center justify-center">
          {[...problem.randomWords.split(',')].map((word: string, key) => (
            <button
              key={key}
              onClick={() => handleSlectWords(word)}
              className={`border border-purple-800 px-6 py-1 rounded-lg text-lg font-bold ${
                selectedWords.includes(word)
                  ? 'bg-purple-1000/50 border border-purple-800 px-6 py-1 rounded-lg text-lg text-purple-400'
                  : ''
              }`}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
