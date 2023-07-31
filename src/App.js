import './App.css';
import { FieldForm } from './components/FieldForm/FieldForm';
import React, { useState } from 'react';
import Field from './components/FieldForm/Field/Field';

function App() {
   
  const [fieldParams, setFieldParams] = useState({height: 5, width: 5, percentage: 2});
  //const [userInput, setUserInput] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({x: 0, y: 0})
  const [testLocation, setTestLocation] = useState({testX: 0, testY: 0})
  const [nextStep, setNextStep] = useState(null);

  const handleMoveCharacter = (e) => {
    const keyPressed = e.target.value;
    const { name, value } = e.target;
    console.log(keyPressed)
    switch(value) {
      case 'left':
        if(currentLocation.y > 0) {
          setTestLocation((prev) => ({
            ...prev,
            testY: testLocation.testY - 1
          }));
          setCurrentLocation((prev) => ({
              ...prev,
              [name]: currentLocation.y - 1
          }));
          console.log(`Current Location x is now ${currentLocation.x}`);
          document.getElementById('BoundaryCheck').style.display='none';
          break;
        } else {
            console.log('Out of Bounds');
            document.getElementById('BoundaryCheck').style.display='block';
            break;
        }
      case 'right':
        if (currentLocation.y < fieldParams.width-1) {  
          setTestLocation((prev) => ({
            ...prev,
            testY: testLocation.testY + 1
          }));
          setCurrentLocation((prev) => ({
            ...prev,
            [name]: currentLocation.y + 1
          }));
          console.log(`Current Location x is now ${currentLocation.x}, y is ${currentLocation.y}`);
          document.getElementById('BoundaryCheck').style.display='none';
          break; 
        } else {
          console.log('Out of Bounds');
          document.getElementById('BoundaryCheck').style.display='block';
          break;
        }
      case 'up':
        if (currentLocation.x > 0) {
          setTestLocation((prev) => ({
            ...prev,
            testX: testLocation.testX - 1
          }));  
          setCurrentLocation((prev) => ({
            ...prev,
            [name]: currentLocation.x - 1
          }));
          console.log(`Current Location y is now ${currentLocation.y}`);
          document.getElementById('BoundaryCheck').style.display='none';
          break;
        } else {
          console.log('Out of Bounds');
          document.getElementById('BoundaryCheck').style.display='block';
          break;
        }
      case 'down':
        if (currentLocation.x < fieldParams.height-1) {
          setTestLocation((prev) => ({
            ...prev,
            testX: testLocation.testX + 1
          }));  
          setCurrentLocation((prev) => ({
            ...prev,
            [name]: currentLocation.x + 1
          }));
          console.log(`Current Location y is now ${currentLocation.y}`);
          document.getElementById('BoundaryCheck').style.display='none';
          break;
        } else {
          console.log('Out of Bounds');
          document.getElementById('BoundaryCheck').style.display='block';
          break;
        }
      default: 
        break;
    }
  }

  const adjustFieldParams = (params) => {
    setFieldParams(params)
  }

  const testStep = (stepId) => {
    setNextStep(stepId);
  }

 
  return (
    <div className="App">
      <div id='Instructions'>
        <h1>Maze Game</h1>
        <p id='userinstructrions'>The goal of this game is to find the hat, first select your dimensions then navigate to find your hat</p>
      </div>
      <main id='main'>
        <div id='fieldForm'>
          <FieldForm setField = {adjustFieldParams}/>
        </div>
        <div id='gameArea'>
          <Field fieldParams = {fieldParams} currentLocation = {currentLocation} testLocation = {testLocation} testStep = {testStep}/>
          <div className='UserButtons'>
            <button onClick={handleMoveCharacter} name='y' value='left'>Left</button>
            <button onClick={handleMoveCharacter} name='y' value='right'>Right</button>
            <button onClick={handleMoveCharacter} name='x' value='up'>Up</button>
            <button onClick={handleMoveCharacter} name='x' value='down'>down</button>
          </div>
          <p id='BoundaryCheck'>You are trying to move out of bounds</p>
        </div>
      </main>
    </div>
  );
}

export default App;
