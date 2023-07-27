const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


const generateField = (height, width, difficulty) => {
    const percentage = difficulty/10;
    //console.log(`Percentage: ${percentage}`);
    const field = Array.apply(null, Array(height).fill(1).map(el => Array.apply(null, Array(width).fill(1))));
    console.log(field)
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
    //console.log(field);
    return field;
}

console.log(generateField(3, 3, 4));

//const newArray = Array.apply(null, Array(5).fill(1).map(el => Array.apply(null, Array(3).fill(2))));
//console.log(newArray);
