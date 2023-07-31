import './App.css';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-black">
      <h1 className='text-3xl font-sans font-bold underline mt-3 text-teal-600'>AWESOME TO-DO APP</h1>
      <h2 className='text-lg italic '>Click Add or delete item on Date Area</h2>
      <Calendar />
    </div>
  );
}

export default App;
