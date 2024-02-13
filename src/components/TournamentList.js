import Tournament from './Tournament';

const TournamentList = () => (
  <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <Tournament />
    <Tournament />
    <Tournament />
    <Tournament />
  </div>
);

export default TournamentList;
