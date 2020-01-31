class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.name)
        if (this.children.length === 0) {
            return
        } else {
            this.children.forEach(c => {
               c.depthFirstSearch(array)
           }) 
        }
        return array
    }
}