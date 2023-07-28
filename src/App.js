import './App.css';
import { FieldForm } from './components/FieldForm/FieldForm';
import React, { useState } from 'react';
import Field from './components/FieldForm/Field/Field';

function App() {
   
  const [fieldParams, setFieldParams] = useState({height: 3, width: 3, percentage: 4});

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
      <Field />
    </div>
  );
}

export default App;
