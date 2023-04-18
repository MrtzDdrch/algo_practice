// Exploring the concept of a binary search tree because life can be fun

class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
  insert(val){
    if(typeof(val) !== 'number') return undefined;
    var newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while(true){
      // I would prefer a frequency counter here but for now I am just working on the basics and it depends on the use case anyway 
      if(val === current.val) return undefined;
      if(val < current.val){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      }else if(val > current.val){
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(val){
    if(typeof(val) !== 'number') return undefined;
    if(!this.root) return false;
    var current = this.root;
    while(true){
      if(val === current.val) return current;
      if(val < current.val){
        if(current = current.left){
          continue;
        }
        return false;
      }
      if(val > current.val){
        if(current = current.right){
          continue;
        }
        return false;
      }
    }
  }
}

var tree = new BinarySearchTree();