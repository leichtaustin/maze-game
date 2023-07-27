import './App.css';
import { Field } from './components/field/field';
import { useState } from 'react';

function App() {
   
  const [height, setHeight] = useState(1);
  const [width, setWidth] = useState(1);
  const [difficulty, setDifficulty] = useState(1)
  const [field, setField] = useState(0)

  const hat = '^';
  const hole = 'O';
  const fieldCharacter = '░';
  const pathCharacter = '*';

  function handleHeightInput(e) {
    setHeight(e.target.value);
  }

  function handleWidthInput(e) {
    setWidth(e.target.value);
  }

  function handleDifficultyInput(e) {
    setDifficulty(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fieldHeight = document.getElementById('height').value;
    const fieldWidth = document.getElementById('width').value;
    const fieldDifficulty = document.getElementById('difficulty').value;
    console.log([fieldHeight, fieldWidth, fieldDifficulty])
    generateField(fieldHeight, fieldWidth, fieldDifficulty);
  }

  const generateField = (height, width, difficulty) => {
    const percentage = difficulty/10;
    const field = Array.apply(null, Array(height).fill(1).map(el => Array.apply(null, Array(width).fill(1))));
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const prob = Math.random();
            field[y][x] = prob > percentage ? fieldCharacter : hole;
        }
    }

    const hatLocation = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
    };

    while (hatLocation.x === 0 && hatLocation.y === 0) {
        hatLocation.x = Math.floor(Math.random() * width);
        hatLocation.y = Math.floor(Math.random() * height);
    }
    field[hatLocation.y][hatLocation.x] = hat;
    console.log(field);
    return field;
}

  
  return (
    <div className="App">
      <form>
        <p>Input your field Settings: </p>
        <label for='height'>Height: </label>
        <input id='height' name='height' type='number' value={height} onChange={handleHeightInput}/>
        <br/>
        <label for='width'>Width: </label>
        <input id='width' name='width' type='number' value={width} onChange={handleWidthInput}/>
        <br/>
        <label for='difficulty'>Difficulty: </label>
        <input id='difficulty' name='difficulty' type='number' value={difficulty} onChange={handleDifficultyInput}/>
        <br/>
        <button type='button' onClick={handleSubmit}>Generate Field!</button>
      </form>
      <p>Height: {height}</p>
      <p>Width {width}</p>
      <p>Difficulty: {difficulty}</p>
      <Field 
        height={height}
        width={width}
        difficulty={difficulty}
        field={field}
      />
    </div>
  );
}

export default App;
