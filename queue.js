// A simple old queue

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    var newNode = new Node(val);
    if(this.size === 0){
      this.first = newNode;
      this.last = this.first;
    }else{
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(){
    if(!this.first) return null;
    var dequeued = this.first;
    if(this.size === 1){
      this.last = null;
      this.first = null;
    }else{
      this.first = dequeued.next;
    }
    dequeued.next = null;
    this.size--;
    return dequeued.val;
  }


}

var queue = new Queue();
for(let i = 1; i < 4; i++){
  queue.enqueue(i);
}