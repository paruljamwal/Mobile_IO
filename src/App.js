import logo from './logo.svg';
import './App.css';
import { Operating } from './components/OperatingSystem/Operating';
import { Manufacturers } from './components/Manufacturer/Manufacturers';

function App() {
  return (
    <div className="App">
     <Operating></Operating>
     <Manufacturers></Manufacturers>
    </div>
  );
}

export default App;
