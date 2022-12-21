import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChallengeProvider } from './contexts/challengeContext';
import { ModalProvider } from './contexts/modalContext';
import { ProblemProvider } from './contexts/problemContext';
import './index.css';
import { Router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChallengeProvider>
      <ProblemProvider>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </ProblemProvider>
    </ChallengeProvider>
  </React.StrictMode>
);
