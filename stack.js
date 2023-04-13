// A boring old stack
// Adding and removing from the end of the list

class Node{
  constructor(val){
    this.val = val;
    this.prev = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
    }else{
      newNode.prev = this.last;
    }
    this.last = newNode;
    return ++this.size;
  }
  pop(){
    if(this.last){
      var poppedNode = this.last;
      if(poppedNode.prev === null){
        this.first = null;
        this.last = null;
      }else{
        this.last = poppedNode.prev;
      }
      this.size--;
      return poppedNode.val;
    }
    return null;
  }

}

var stack = new Stack();
for(var i = 1; i < 11; i++){
  stack.push(i);
}