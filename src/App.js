
import React, {useState} from 'react';
import './App.css';
import Button from './Components/Button';


function App() {

  const [buttonColor, setButtonColor] = useState('')
  
  const handleBtnColor = (color) => {
    
    setButtonColor(color);
  };


  return (
    <>
      <Button btnName="Make Me Blue" btnColor={buttonColor === 'blue' ? 'blueBG' : 'blueText'} btnHandleClick={() => handleBtnColor('blue')} />

      <Button btnName="Make Me Red" btnColor={buttonColor === 'red' ? 'redBG' : 'redText'} btnHandleClick={() => handleBtnColor('red')}/>

      <Button btnName="Make Me Green" btnColor={buttonColor === 'green' ? 'greenBG' : 'greenText'}  btnHandleClick={() => handleBtnColor('green')}/>
        
      <Button btnName="Make Me Yellow" btnColor={buttonColor === 'yellow' ? 'yellowBG' : 'yellowText'}  btnHandleClick={() => handleBtnColor('yellow')}/>
    </>
  );
}

export default App;
