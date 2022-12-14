import { collection, getDocs } from 'firebase/firestore';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { firebaseDB } from '../services/firebaseConfig';

type ChallengeProps = {
  challenge_id: string;
  completed: boolean;
  locked: boolean;
  name: string;
  xp: number;
};

type ChallengeContextData = {
  setChallengeDB(data: ChallengeProps): void;
  challengeData: any;
};

type ChallengeProviderProps = {
  children: ReactNode;
};

const ChallengeContext = createContext<ChallengeContextData | undefined>(
  undefined
);

export const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  const [challengeData, setChallengeData] = useState({} as ChallengeProps);

  const db = collection(firebaseDB, 'challenges');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(db);
      console.log(data.docs[0].data());
      setChallengeData(data.docs[0].data() as ChallengeProps);
    };
    const user = JSON.parse(localStorage.getItem('react.auth.user') as any);
    if (user?.uid) {
      getUsers();
    }
  }, []);

  const setChallengeDB = (data: ChallengeProps) => {
    setChallengeData(data);
  };

  return (
    <ChallengeContext.Provider value={{ setChallengeDB, challengeData }}>
      {children}
    </ChallengeContext.Provider>
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
