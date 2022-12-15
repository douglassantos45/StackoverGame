/* eslint-disable camelcase */
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ProblemProps } from '../layouts/Challenge/Problem';
import { firebaseDB } from '../services/firebaseConfig';

type ChallengeProps = {
  problems: string;
};

type UserChallengeProps = {
  id: string;
  challenge_id: string;
  user_id: string;
  completed: boolean;
  locked: boolean;
  name: string;
  xp: number;
};

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
