import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex max-w-sm my-0 mx-auto p-6 rounded-lg bg-white shadow-xl">
      <div className="flex-shrink-0 items-center">
        <picture className="h-12 w-12">
          <source srcSet={logo} type="image/webp" />
          <img src={logo} className="h-12 w-12" alt="Logo" />
        </picture>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
