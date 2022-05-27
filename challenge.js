class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  add(number) {
    const node = new Node(number);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next_node = node;
      this.tail = node;
    }
    this.length++;
  }

  get(index) {
    if (index < 0) {
      return null;
    }
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        return current.value;
      }
      counter++;
      current = current.next_node;
    }
    return null;
  }

  addAt(index, item) {
    const node = new Node(item);
    if (index === 0) {
      node.next_node = this.head;
      this.head = node;
      return;
    }

    if (index > this.length) {
      this.add(item);
      return;
    }

    const node_before_index = this.#get_node(index - 1);
    node.next_node = node_before_index.next_node;
    node_before_index.next_node = node;

  }

  remove(index) {
    if (index < 0 || index >= this.length){
      return null;
    }
    const node_before_index = this.#get_node(index - 1);
    node_before_index.next_node = node_before_index.next_node.next_node
    this.length--
  }

  #get_node(index) {
    if (index === 0) {
      return this.head;
    }

    if (index > this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      count++
      current = current.next_node;
    }
    return null;
  }

}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
