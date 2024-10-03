function knightMoves(x, y) {
    // Possible knight moves (relative positions)
    const moves = [
        [2, 1], [2, -1],
        [-2, 1], [-2, -1],
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ];
    
    const validMoves = [];

    for (const [dx, dy] of moves) {
        const newX = x + dx;
        const newY = y + dy;

        // Check if the new position is within board boundaries
        if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
            validMoves.push(`(${newX},${newY})`);
        }
    }

    // Join the valid moves into a single string separated by commas
    return validMoves.join(', ');
}

// Example usage:
console.log(knightMoves(4, 4));  // Outputs all valid moves from position (4, 4)
console.log(knightMoves(1, 1));
console.log(knightMoves(8, 8));
console.log(knightMoves(5, 7));
