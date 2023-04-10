// Another linked list. Oh joy. 

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push new node to the end of the list
  push(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){

  }
  shift(){

  }
  get(){

  }
  set(){

  }
  insert(){

  }
  remove(){

  }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);