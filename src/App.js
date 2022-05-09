import './App.css';
import imageOne from './fitness.jpg';
import imageTwo from './athletes.jpg';
import { Fitness } from './Fitness';

function App() {
  return (
    <div>
      <div className="section">
      <div  className="container"> 
        <h1>My To-Do-List</h1>
      </div>      
      <div className="container"> 
      <img src= {imageOne} className="imageOne" alt="Fitness"  width="50%" />
      </div>
      <div className="container" >
        <h2>Dagens treningsopplegg</h2>
      </div>
      <Fitness />
      <div className="container">
        <img src= {imageTwo} className="imageTwo" alt="Athletes"  width="50%" />
        </div>
      </div>
    </div>
  );
}

export default App;
