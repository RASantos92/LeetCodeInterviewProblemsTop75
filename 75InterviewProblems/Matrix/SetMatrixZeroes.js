// const setZeroes = (matrix) => {
//     const changeColumnAndRow = (x, y) => {
//         for (let i = 0; i < matrix[y].length; i++) {
//             changedPosition.set((y + i), 1)
//             matrix[y][i] = 0;
//         }
//         y = matrix.length - 1
//         while (y >= 0) {
//             changedPosition.set((y + x), 1)
//             matrix[y][x] = 0;
//             y--
//         }
//     }
//     const changedPosition = new Map();
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             const positionValue = matrix[i][j];
//             if (positionValue == 0 && !changedPosition.has((i + j))) {
//                 // create healper function to set colums.
//                 changeColumnAndRow(j, i)
//                 break;
//             }
//         }
//     }
//     console.log(matrix)
// }

// const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
// setZeroes(matrix)




const setZeroes = (matrix) => {
    const rowTracker = {};
    const colTracker = {};

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j]) {
                rowTracker[i] = true;
                colTracker[j] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (rowTracker[i] || colTracker[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};