import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './layouts/Home';
import App from './App';
import { Ranking } from './layouts/Ranking';
import { Challenge } from './layouts/Challenge';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
};
