
import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Greeting from './Components/Greeting/Greeting';
import Counter from './Components/Counter/Counter';
import ToDoList from './Components/ToDoList/ToDoList';
import { ThemeProvider } from './Components/Theme/ThemeContext';
import ThemeTest from './Components/Theme/ThemeTest';
import NameFilter from './Components/Theme/NameFilter/NameFilter';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';


function App() {

  const [buttonColor, setButtonColor] = useState('')

  const handleBtnColor = (color) => {

    setButtonColor(color);
  };


  return (
    <>
      <ThemeProvider>
        <Navbar />

        {/* <Routes> // I commented this part because I don't have these following components
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes> */}


        <Button btnName="Make Me Blue" btnColor={buttonColor === 'blue' ? 'blueBG' : 'blueText'} btnHandleClick={() => handleBtnColor('blue')} />

        <Button btnName="Make Me Red" btnColor={buttonColor === 'red' ? 'redBG' : 'redText'} btnHandleClick={() => handleBtnColor('red')} />

        <Button btnName="Make Me Green" btnColor={buttonColor === 'green' ? 'greenBG' : 'greenText'} btnHandleClick={() => handleBtnColor('green')} />

        <Button btnName="Make Me Yellow" btnColor={buttonColor === 'yellow' ? 'yellowBG' : 'yellowText'} btnHandleClick={() => handleBtnColor('yellow')} />

        <Greeting name='Ali' />
        <Greeting name='Maryam' />
        <Greeting name='Sara' />
        <Greeting name='Mina' />
        <Greeting name='Neda' />

        <Counter />
        <ToDoList />
        <NameFilter />

        <ThemeTest />

        <Welcome />
      </ThemeProvider>
    </>
  );
}

export default App;
