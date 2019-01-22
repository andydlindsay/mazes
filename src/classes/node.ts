export default class Node {
    [key: string]: any;
    
    above: Node | null = null;
    right: Node | null = null;
    below: Node | null = null;
    left: Node | null = null;
    visited: boolean = false;

    constructor(public x: number, public y: number) {}
}
