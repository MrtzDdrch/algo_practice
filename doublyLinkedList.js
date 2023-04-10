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
  // Remove node from beginning of list
  shift(){
    if(this.head){
      var oldHead = this.head;
      if(oldHead.next){
        oldHead.next.prev = null;
        this.head = oldHead.next;
        oldHead.next = null;
      }else{
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return oldHead.val;
    }
    return undefined; 
  }
  // Add node to beginning of list
  unshift(val){
    var newHead = new Node(val);
    if(this.length === 0){
      this.head = newHead;
      this.tail = newHead;
    }else{
      this.head.prev = newHead;
      this.newHead.next = this.head;
      this.head = newHead;
    }
    length++;
    return this;
  }
  // Get node from index
  get(index, node=false){
    if(typeof(index) !== 'number' || index < 0 || index >= this.length) return undefined;
    var current = this.head;
    while(index > 0){
      current = current.next;
      index--;
    }
    if(!node) return current.val;
    return current;
  }
  // set new value for existing node
  set(index, val){
    if(typeof(index) !== 'number' || index < 0 || index >= this.length) return undefined;
    var node = this.get(index, true);
    node.val = val;
    return true;
  }
  // insert new node into list at given index
  insert(index, val){
    if(typeof(index) !== 'number' || index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var previous = this.get(index - 1, true);
    newNode.next = previous.next;
    newNode.prev = previous;
    previous.next = newNode;
    this.length++;
    return true;
  }
  remove(){

  }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);