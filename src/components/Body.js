import { Routes, Route } from 'react-router-dom';

import LoginView from './views/LoginView';
import TournamentsView from './views/TournamentsView';

const Body = () => (
  <main className="dark:bg-slate-900 p-4">
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/" element={<TournamentsView />} />
    </Routes>
  </main>
);

export default Body;
