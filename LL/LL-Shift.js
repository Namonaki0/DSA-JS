class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.tail = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.shift();
