import './App.css';
import { FieldForm } from './components/FieldForm/FieldForm';
import React, { useState } from 'react';
import Field from './components/FieldForm/Field/Field';

function App() {
   
  const [fieldParams, setFieldParams] = useState({height: 5, width: 5, percentage: 2});
  const [userInput, setUserInput] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({x: 0, y: 0})

  const handleMoveCharacter = (e) => {
    const keyPressed = e.target.value;
    const { name, value } = e.target;
    console.log(keyPressed)
    switch(value) {
      case 'left':
        if(currentLocation.x > 0) {  
          setCurrentLocation((prev) => ({
              ...prev,
              [name]: currentLocation.x - 1
            }));
            console.log(`Current Location x is now ${currentLocation.x}`);
            break;
        } else {
            console.log('Out of Bounds');
            break;
        }
      case 'right':
        if (currentLocation.x < fieldParams.width) {  
          setCurrentLocation((prev) => ({
            ...prev,
            [name]: currentLocation.x + 1
          }));
          console.log(`Current Location x is now ${currentLocation.x}`);
          break;
        } else {
          console.log('Out of Bounds');
          break;
        }
      case 'up':
        if (currentLocation.y > 0) {
          setCurrentLocation((prev) => ({
            ...prev,
            [name]: currentLocation.y - 1
          }));
          console.log(`Current Location y is now ${currentLocation.y}`);
          break;
        } else {
          console.log('Out of Bounds');
          break;
        }
      case 'down':
        if (currentLocation.y < fieldParams.height) {
          setCurrentLocation((prev) => ({
            ...prev,
            [name]: currentLocation.y + 1
          }));
          console.log(`Current Location y is now ${currentLocation.y}`);
          break;
        } else {
          console.log('Out of Bounds');
          break;
        }
      default: 
        break;
    }
  }

  const adjustFieldParams = (params) => {
    setFieldParams(params)
  }
  
  return (
    <div className="App">
      <h1>Maze Game</h1>
      <p>The goal of this game is to find the hat, first select your dimensions then navigate to find your hat</p>
      <FieldForm setField = {adjustFieldParams} />
      <p>fieldParams Height: {fieldParams.height}</p>
      <p>fieldParams Width: {fieldParams.width}</p>
      <p>fieldParams Percentage: {fieldParams.percentage}</p>
      <Field fieldParams = {fieldParams} currentLocation = {currentLocation}/>
      <div className='UserButtons'>
        <button onClick={handleMoveCharacter} name='x' value='left'>Left</button>
        <button onClick={handleMoveCharacter} name='x' value='right'>Right</button>
        <button onClick={handleMoveCharacter} name='y' value='up'>Up</button>
        <button onClick={handleMoveCharacter} name='y' value='down'>down</button>
      </div>
    </div>
  );
}

export default App;
