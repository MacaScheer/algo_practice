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

    insertBefore(node, nodeToInsert) {
        // Write your code here.
    }

    insertAfter(node, nodeToInsert) {
        // Write your code here.
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