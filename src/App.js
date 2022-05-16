import logo from './logo.svg';
import './App.css';
 import { Operating } from './components/OperatingSystem/Operating';
import { Manufacturers } from './components/Manufacturer/Manufacturers';

function App() {
  var devices=[
    {name:"Samsung"},
{name:"HTC"},
{name:"Micromax"},
{name:"Apple"}]

let Operate=[
  {name:"Android"},
  {name:"Blackberry"},
  {name:"iPhine"},
  {name:"Windows Phone"}
]
  return (
    <div className="App">
     <h1>Mobile Manufactures</h1>
     {devices.map((e)=>(
       <Manufacturers {...e} /> 
       ))}

<h1>Mobile Operating System</h1>
{  Operate.map((a)=>(
        <Operating {...a} />

  ))}
    </div>
  );
}

export default App;
