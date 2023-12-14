import getInput from "../utils/getInput.mjs";

// Define the constraints
const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;

function isGamePossible(game) {
    for (const round of game) {
      const [redRequired, greenRequired, blueRequired] = round;
      if (redRequired > redCubes || greenRequired > greenCubes || blueRequired > blueCubes) {
        return false;
      }
    }
    return true;
}

function inputToMatrix(input) {
    const reg = new RegExp(/Game (\d+)\: /)
    const [,gameId] = reg.exec(input)
    input = input.replace(reg, '');

    return {
        matrix: input.split(';').map(round => {
            // Initialize cube counts
            let red = 0, green = 0, blue = 0;
            // Parse each color count
            round.trim().split(',').forEach(cubeCount => {
                const [count, color] = cubeCount.trim().split(' ');
                if (color === 'red') red = parseInt(count);
                if (color === 'green') green = parseInt(count);
                if (color === 'blue') blue = parseInt(count);
            });
            return [red, green, blue];
        }),
        gameId: parseInt(gameId)
    }
}

const input = await getInput(2);

let answer = 0;

input.trim().split("\n").forEach((game, id) => {
    const normalizedGame = inputToMatrix(game);
    if (isGamePossible(normalizedGame.matrix)) {
        answer += normalizedGame.gameId;
    }
})

console.log(answer)

