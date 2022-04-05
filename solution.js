// recursive
function possibleWaysRecursive(row, colmn) {
    if (row === 1 || colmn === 1) {
        return 1
    }
    else {
        return possibleWaysRecursive(row, colmn - 1) + possibleWaysRecursive(row - 1, colmn)
    }
}
// driver code 
//console.log(possibleWaysRecursive(3,3))

/*
    ex: [    j  j  j
           i[0, 0, 0],
           i[0, 0, 0],
           i[0, 0, 0]
        ]
*/

// recursive
function possibleWaysDynamic(row, colmn) {
    const matrix = Array(row).fill(Array(colmn).fill(1))

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
        }
    }
    return matrix[matrix.length - 1].at(-1)
}
// driver code
console.log(possibleWaysDynamic(3, 3))
//console.log(Array(3).fill(Array(3).fill(0)))
