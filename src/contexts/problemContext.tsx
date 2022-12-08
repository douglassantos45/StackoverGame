import { createContext, ReactNode, useContext, useState } from 'react';

type ProblemProps = {
  nextProblem(): void;
  next: number;
  handleCompleteProblem(): void;
  completed: boolean;
};

type ProblemProviderProps = {
  children: ReactNode;
};

const ProblemContext = createContext<ProblemProps | undefined>(undefined);

export const ProblemProvider = ({ children }: ProblemProviderProps) => {
  const [next, setNext] = useState(0);
  const [completed, setCompleted] = useState(false);

  const nextProblem = () => {
    setNext((value) => value + 1);
  };

  const handleCompleteProblem = () => {
    setCompleted(true);
  };

  return (
    <ProblemContext.Provider
      value={{ next, nextProblem, completed, handleCompleteProblem }}
    >
      {children}
    </ProblemContext.Provider>
  );
};

//Context Hook
export const useProblemContext = () => {
  const context = useContext(ProblemContext);

  if (context === undefined) {
    throw new Error('userForm precisa ser usado dentro do FormProvider');
  }

  return context;
};
