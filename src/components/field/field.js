import React, { useState } from 'react';
import { FieldRow } from './fieldRow';

export const Field = (props) => {

    const hat = '^';
    const hole = 'O';
    const fieldCharacter = '░';
    const pathCharacter = '*';

    const { height, width, difficulty } = props;
    const newDifficulty = 0.2;
    
    const [locationX, setLocationX] = useState(0);
    const [locationY, setLocationY] = useState(0);

    const startField = [
        [pathCharacter, fieldCharacter, fieldCharacter],
        [fieldCharacter, hole, hole],
        [fieldCharacter, hat, hole]
    ];
    
    return (
        <div>
            {props.field.map(row => {
                return (
                    <FieldRow 
                        row={row}
                    />
                    )
            })}
            <button onClick={console.log(height)}>
                Log field
            </button>
        </div>
        
    )
}