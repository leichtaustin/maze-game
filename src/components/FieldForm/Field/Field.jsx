import React, { useState, useEffect } from 'react';

export default function Field(props) {

    const { height, width, percentage } = props.fieldParams;
    const [field, setField] = useState([]);

    const hat = '^';
    const hole = 'O';
    const fieldCharacter = '░';
    const pathCharacter = '*';

    //let fieldDrawing;

    useEffect(() => {
        generateField(height, width, percentage);
    }, [props.fieldParams])
    
    /*function generateField(height, width, percentage) {
        const decPercent = percentage/10;
        const field = new Array(height).fill(0).map(el => new Array(width));
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const prob = Math.random();
            field[y][x] = prob > decPercent ? fieldCharacter : hole;
          }
        }
        // Set the "hat" location
        const hatLocation = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height)
        };
        // Make sure the "hat" is not at the starting point
        while (hatLocation.x === 0 && hatLocation.y === 0) {
          hatLocation.x = Math.floor(Math.random() * width);
          hatLocation.y = Math.floor(Math.random() * height);
        }
        field[hatLocation.y][hatLocation.x] = hat;
        setField(field);
      }*/

      function generateField(height, width, percentage) {
        const decPercent = percentage/10;
        let field = Array.from(fieldCharacter.repeat(height))
        field = field.map(row => Array.from(fieldCharacter.repeat(width)));
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const prob = Math.random();
              field[y][x] = prob > decPercent ? fieldCharacter : hole;
            }
          }
          // Set the "hat" location
          const hatLocation = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
          };
          // Make sure the "hat" is not at the starting point
          while (hatLocation.x === 0 && hatLocation.y === 0) {
            hatLocation.x = Math.floor(Math.random() * width);
            hatLocation.y = Math.floor(Math.random() * height);
          }
        field[hatLocation.y][hatLocation.x] = hat;
        /*console.log(height)
        console.log(width)
        console.log(percentage)
        console.log(fieldDrawing);     
        
        
        const field = [[height, 1, 2], [width, 2, 3], [decPercent, 3, 4]];*/
        
        setField(field);
      }
    
    return (
        <div>
            {field.map(row => (
                <p>{row}</p>
            ))}
        </div>
    )
}