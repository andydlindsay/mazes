export function randomStartingCell(maxX: number, maxY: number): string {
    const startingX: number = Math.floor((Math.random() * maxX));
    const startingY: number = Math.floor((Math.random() * maxY));
    return `${startingX},${startingY}`;
}
