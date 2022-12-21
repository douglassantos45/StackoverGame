import { createContext, ReactNode, useContext, useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  open(): void;
};

type ModalProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext<ModalProps | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, open }}>
      {children}
    </ModalContext.Provider>
  );
};

//Context Hook
export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('userForm precisa ser usado dentro do FormProvider');
  }

  return context;
};
