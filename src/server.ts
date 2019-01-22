import Node from './classes/node';
import * as helpers from './helpers/helpers';

const maxX: number = 4;
const maxY: number = 4;
const nodes: { [key: string]: Node } = {};
const startingCoords: string = helpers.randomStartingCell(maxX, maxY);
const stack: string[] = [];

let visitedNodeCount: number = 0;

// initialize nodes
for (let i: number = 0; i < maxY; i++) {
    for (let j: number = 0; j < maxX; j++) {
        nodes[`${j},${i}`] = new Node(j, i);
    }
}

stack.push(startingCoords);
let currentNode: Node;

while (visitedNodeCount < maxX * maxY) {
    currentNode = nodes[stack[stack.length - 1]];
    if (!currentNode.visited) {
        currentNode.visited = true;
        visitedNodeCount++;
    }
    
    let neighbours: string[] = helpers.findNeighbours(stack[stack.length - 1], maxX, maxY);
    neighbours = neighbours.filter((elem) => {
        return !nodes[elem].visited;
    });

    if (neighbours.length > 0) {
        const nextCoords = neighbours[Math.floor(Math.random() * neighbours.length)];
        stack.push(nextCoords);
    } else {
        stack.pop();
    }
}
