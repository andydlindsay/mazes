import Node from './classes/node';
import * as helpers from './helpers/helpers';

const maxX: number = 4;
const maxY: number = 4;
const nodes: { [key: string]: Node; } = {};
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
visitedNodeCount++;

// while (visitedNodeCount < maxX * maxY) {

// }
