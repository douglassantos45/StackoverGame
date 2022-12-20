/* eslint-disable camelcase */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type ChallengeContextData = {};

type ChallengeProviderProps = {
  children: ReactNode;
};

const ChallengeContext = createContext<ChallengeContextData | undefined>(null!);

export const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  return (
    <ChallengeContext.Provider value={{}}>{children}</ChallengeContext.Provider>
  );
};

//Context Hook
export const useChallengeContext = () => {
  const context = useContext(ChallengeContext);

  if (context === undefined) {
    throw new Error('userForm precisa ser usado dentro do FormProvider');
  }

  return context;
};
