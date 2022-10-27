import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './layouts/Home';
import App from './App';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
