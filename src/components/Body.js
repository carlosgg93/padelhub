import { Routes, Route } from 'react-router-dom';

import LoginView from './views/LoginView';
import TournamentsView from './views/TournamentsView';
import HomeView from './views/HomeView';

const Body = () => (
  <main className="dark:bg-primary-0 bg-primary-900 p-4">
    <Routes>
      <Route path="/login" element={<LoginView />} />
      <Route path="/" element={<HomeView />} />
      <Route path="/tournaments" element={<TournamentsView />} />
    </Routes>
  </main>
);

export default Body;
