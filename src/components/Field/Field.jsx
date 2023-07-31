import React, { useState, useEffect } from 'react';
import './Field.css';

export default function Field(props) {

    const { height, width, percentage } = props.fieldParams;
    const { x, y } = props.currentLocation;
    const { testX, testY } = props.testLocation;
    const [field, setField] = useState([]);

    const hat = '^';
    const hole = 'O';
    const fieldCharacter = '░';
    const pathCharacter = '*';

    useEffect(() => {
        generateField(height, width, percentage);
    }, [props.fieldParams])

    useEffect(() => {
        
        console.log(x)
        console.log(y)
        let newArr = createPath(x, y);
        console.log(newArr);
        setField(newArr);
        
    }, [props.currentLocation])

    useEffect(() => {
        let step = returnNextStep(testX, testY)
        console.log(`Step is ${step}`);
        if (step === hat) {
            //props.testStep('hat');
            alert('You found the hat, congratulations you won!');
            document.getElementById('field').style.display = 'none';
            setField([])
            props.setCurrLoc({x: 0, y: 0});
            props.setTest({testX: 0, testY: 0});
        } else if (step === hole) {
            //props.testStep('hole');
            alert('You just stepped in a hole, time to restart');
            document.getElementById('field').style.display = 'none';
            setField([])
            props.setCurrLoc({x: 0, y: 0});
            props.setTest({testX: 0, testY: 0});
        } else if (step === fieldCharacter || step === pathCharacter) {
            //props.testStep('okay');
        }
    }, [props.testLocation])

    function createPath(x, y) {
        const newArray = field.map((row, i) => {
            if (i === x) {
                return field[x].map((el, j) => {
                    if (j === y) {
                        return pathCharacter;
                    } else {
                        return el;
                    }
                })
            } else {
                return row;
            }
        });
        return newArray;
    }

    function returnNextStep(x, y) {
        let val;
        field.map((row, i) => {
            if (i === x) {
                field[x].map((el, j) => {
                    if (j === y) {
                        val = el;
                    }
                })
            } 
        });
        console.log(`val is ${val}`)
        return val;
    }

    
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
    field[0][0] = pathCharacter;
        
    setField(field);
    }
    
    return (
        <div id='field' className='field'>
            {field.map(row => (
                <p className='fieldRow'>{row}</p>
            ))}
        </div>
    )
}