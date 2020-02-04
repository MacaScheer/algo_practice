class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        let prevHead = this.head
        this.head = node
        this.head.next = prevHead
    }

    setTail(node) {
        let prevTail = this.tail
        this.tail = node;
        prevTail.next = this.tail
    }

    insertBefore(node, nodeToInsert) { // o--O-  -o- -O--
        // Write your code here.
        let prevPrev = node.prev;
        prevPrev.next = nodeToInsert;
        nodeToInsert.next = node;
        nodeToInsert.prev = prevPrev;
        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        // Write your code here.
        let prevNext = node.next;
        node.next = nodeToInsert;
        nodeToInsert.next = prevNext;
        prevNext.prev = nodeToInsert;
    }

    insertBefore(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;
        if (node.prev === null) {
            this.head = nodeToInsert
        } else {
            node.prev.next = nodeToInsert
        }
        node.prev = nodeToInsert
    }

    insertAfter(node, nodeToInsert) {
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node
        nodeToInsert.next = node.next;
        if (node.next === null) {
            this.tail = nodeToInsert
        } else {
            node.next.prev = nodeToInsert
        }
        node.next = nodeToInsert
    }

    insertAtPosition(position, nodeToInsert) {
        // Write your code here.
    }

    removeNodesWithValue(value) {
        // Write your code here.
    }

    remove(node) {
        // Write your code here.
    }

    containsNodeWithValue(value) {
        // Write your code here.
    }
}