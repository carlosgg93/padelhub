import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header className="bg-blue-950 px-20 py-5 shadow">
      <div className="flex h-16 items-center justify-between">
        <a href="e" className="text-white hover:text-slate-500 focus:ring-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </a>
        <a href="e" className="text-white">
          <img src={logo} className="h-20 w-20" alt="Logo" />
        </a>
        <div>
          <button type="button" className="text-black">
            theme
          </button>
          <button type="button" className="text-black">
            config
          </button>
        </div>
      </div>
    </header>
  );
}

export default App;
