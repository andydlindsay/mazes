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
let currentNode: Node = nodes[stack[stack.length - 1]];
currentNode.visited = true;
visitedNodeCount++;

while (visitedNodeCount < maxX * maxY) {
    let neighbours: [string, string][] = helpers.findNeighbours(stack[stack.length - 1], maxX, maxY);
    neighbours = neighbours.filter((elem) => {
        return !nodes[elem[0]].visited;
    });

    if (neighbours.length > 0) {
        const nextNodeCoords = neighbours[Math.floor(Math.random() * neighbours.length)];
        const nextNode = nodes[nextNodeCoords[0]];

        currentNode[nextNodeCoords[1]] = nextNode;
        switch (nextNodeCoords[1]) {
            case 'above':
                nextNode.below = currentNode;
                break;
            case 'right':
                nextNode.left = currentNode;
                break;
            case 'below':
                nextNode.above = currentNode;
                break;
            case 'left':
                nextNode.right = currentNode;
                break;
        }

        stack.push(nextNodeCoords[0]);
    } else {
        stack.pop();
    }

    currentNode = nodes[stack[stack.length - 1]];
    if (!currentNode.visited) {
        currentNode.visited = true;
        visitedNodeCount++;
    }
}

console.log(nodes);
