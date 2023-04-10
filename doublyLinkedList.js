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
  logAll(){
    if(this.length > 0){
      var current = this.head;
      var count = this.length;
      while(count > 0){
        console.log(current.val);
        current = current.next;
        count--;
      }
    }
    return undefined;
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
  // Remove node from end of list
  pop(){
    if(!this.tail) return undefined;
    var poppedNode = this.tail;
    if(poppedNode.prev){
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }else{
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return poppedNode.val;
  }
  shift(){

  }
  unshift(){
    
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