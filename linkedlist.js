import Node from "./node.js";

export default class LinkedList {
  constructor(head = null) {
    this.headNode = head;
  }
  append(val) {
    if (this.headNode) {
      let currNode = this.headNode;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = new Node(val);
    } else {
      this.headNode = new Node(val);
    }
  }
  prepend(val) {
    let newNode = new Node(val);
    newNode.next = this.headNode;
    this.headNode = newNode;
  }
  size() {
    let length = 0;
    if (this.headNode) {
      let currNode = this.headNode;
      while (currNode) {
        currNode = currNode.next;
        length++;
      }
    }
    return length;
  }
  head() {
    return this.headNode;
  }
  tail() {
    if (this.headNode) {
      let currNode = this.headNode;
      while (currNode.next) {
        currNode = currNode.next;
      }
      return currNode;
    }
    return null;
  }
  at(index) {
    if (this.headNode) {
      let i = 0;
      let currNode = this.headNode;
      while (currNode) {
        if (i == index) return currNode;
        currNode = currNode.next;
        i++;
      }
    }
    return null;
  }
  pop() {
    if (this.headNode.next) {
      let currNode = this.headNode;
      while (currNode.next.next) {
        currNode = currNode.next;
      }
      currNode.next = null;
    } else {
      this.headNode = null;
    }
  }
  contains(val) {
    if (this.headNode) {
      let currNode = this.headNode;
      while (currNode) {
        if (currNode.val == val) return true;
        currNode = currNode.next;
      }
    }
    return false;
  }
  find(val) {
    if (this.headNode) {
      let currNode = this.headNode;
      let index = 0;
      while (currNode) {
        if (currNode.val == val) return index;
        currNode = currNode.next;
        index++;
      }
    }
    return null;
  }
  toString() {
    let lstStr = "";
    if (this.headNode) {
      let currNode = this.headNode;
      while (currNode) {
        let str = `( ${currNode.val} ) -> `;
        lstStr = lstStr.concat(str);
        currNode = currNode.next;
      }
      lstStr = lstStr.concat(`null`);
    }
    return lstStr || null;
  }
  insertAt(idx, val) {
    if (idx == 0) {
      this.prepend(val);
      return;
    } else if (idx == this.size() - 1) {
      this.append(val);
      return;
    }
    let node = this.at(idx - 1);
    let tmp = new Node(val);
    tmp.next = node.next;
    node.next = tmp;
  }
  removeAt(idx) {
    if (idx == 0) {
      this.headNode = node.next;
    } else if (idx == this.size() - 1) {
      this.pop();
      return;
    }
    let node = this.at(idx - 1);
    if (node.next.next) {
      node.next = node.next.next;
    } else {
      node.next = null;
    }
  }
}
