import { useState } from 'react';
import './index.css';


const App = () => {
const [diceNumber,setDiceNumber] = useState(2)

const refreshDice = () =>{
const ranno = Math.floor(Math.random() * 6) +1
setDiceNumber(ranno)
}
  return (
    <div>
    <center>
    <img width={200} height={200} src={require(`./assets/${diceNumber}.png`)}></img>
    <br></br>
    <button onClick={()=> refreshDice()} className='button'>Roll</button>
    </center>
    </div>
  );
}

export default App;
