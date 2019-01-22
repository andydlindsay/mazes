export function randomStartingCell(maxX: number, maxY: number): string {
    const startingX: number = Math.floor((Math.random() * maxX));
    const startingY: number = Math.floor((Math.random() * maxY));
    return `${startingX},${startingY}`;
}

export function findNeighbours(cellCoords: string, maxX: number, maxY: number): string[] {
    const coordArray = cellCoords.split(',');
    const cellY = Number(coordArray[1]);
    const cellX = Number(coordArray[0]);
    const neighbours: string[] = [];
    
    // above
    if (cellY - 1 >= 0) {
        neighbours.push(`${cellX},${cellY - 1}`);
    }

    // right
    if (cellX + 1 < maxX) {
        neighbours.push(`${cellX + 1},${cellY}`);
    }

    // below
    if (cellY + 1 < maxY) {
        neighbours.push(`${cellX},${cellY + 1}`);
    }

    // left
    if (cellX - 1 >= 0) {
        neighbours.push(`${cellX - 1},${cellY}`);
    }

    return neighbours;
}
