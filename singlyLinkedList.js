// Working on a Singly Linked List. Unfinished, work in progress...

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // I want this one for testing and tinkering. It is just logging all values from all nodes
  logAll(){
    if(this.length > 0){
      var length = this.length;
      var current = this.head;
      while(length > 0){
        console.log(current.val);
        current = current.next;
        length--;
      }
    }
  }
  // Push new node to the end of the list
  push(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Remove node from end of list
  pop(){
    if(!this.head) return undefined;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current.val;
  }
  // shift(): Remove node from beginning of list, delete (and return) it, move head over to next in line, decrement length by 1
  // I returned just the current heads' value rather than the node, because who wants the node?
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length--;
      return currentHead.val;
    }
    this.head = this.head.next;
    this.length--;
    return currentHead.val;
  }
  // unshift(): Accept value, create new node, set new node as head, increment length by 1, return the list
  unshift(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get(): Accept index, check if index is applicable to list, loop through list until index is found and return value
  // Changed this function to make return of node optional. This makes things easier down the road, when I want to use this function from within another function
  get(index, node=false){
    if(typeof(index) !== 'number') return undefined;
    if(index < 0 || index >= this.length) return undefined;
    var current = this.head;
    while(index > 0){
      current = current.next;
      index--;
    }
    if(node){
      return current;
    }
    return current.val;
  }
  // Set new value for existing node
  set(index, val){
    var node = this.get(index, true);
    if(node){
      node.val = val;
      return true;
    }
    return false;
  }
  // Insert new node into the list
  insert(index, val){
    if(typeof(index) !== 'number' || index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    
    var newNode = new Node(val);
    var previous = this.get(index - 1, true);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return true;
  }
}

var list = new SinglyLinkedList;
list.push(1);
list.push(2);
list.push(3);




