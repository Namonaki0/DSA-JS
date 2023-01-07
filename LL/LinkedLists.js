class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = value;
    this.tail = this.head;
    this.length = 1;
  }
}

const newNode = new linkedList(23);
