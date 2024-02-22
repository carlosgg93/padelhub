import { Spinner } from 'keep-react';
import TournamentList from '../TournamentList';

const TournamentsView = () => (
  <div className="flex">
    <TournamentList />
    {/* <Spinner color="info" size="lg" /> */}
  </div>
);

export default TournamentsView;
