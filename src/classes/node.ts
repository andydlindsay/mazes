export default class Node {
    above: Node | null = null;
    right: Node | null = null;
    below: Node | null = null;
    left: Node | null = null;

    constructor(public x: number, public y: number) {}
}