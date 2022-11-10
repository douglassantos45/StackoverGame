import { useState } from 'react';

export const Problem = () => {
  const words = ['for', 'while', 'if', 'break', 'i++', 'const', 'forEach'];
  const wordsNoReat = new Set<string>();

  Array.from({ length: words.length - 1 }).map(() => {
    wordsNoReat.add(words[Math.floor(Math.random() * words.length)]);
  });

  [...wordsNoReat].map((word) => console.log(word));

  return (
    <section className="h-full flex flex-col">
      <h1 className="text-2xl">Resolva o problema:</h1>

      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <p className="mb-32">problems</p>
        <div className="flex flex-wrap mt-32 gap-2 max-w-md items-center justify-center">
          {[...wordsNoReat].map((word, key) => (
            <button
              key={key}
              className={`border border-purple-800 px-6 py-1 rounded-lg text-lg font-bold`}
            >
              {word}
            </button>
          ))}
          <button
            className={`bg-purple-1000/50 border border-purple-800 px-6 py-1 rounded-lg text-lg text-purple-400`}
          >
            while
          </button>
        </div>
      </div>
    </section>
  );
};
