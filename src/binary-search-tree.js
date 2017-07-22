// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BinarySearchTree(value);
    const recFunction = (obj) => {
      if (value < obj.value && obj.left === null) obj.left = node;
      else if (value < obj.value) recFunction(obj.left);
      else if (value > obj.value && obj.right === null) obj.right = node;
      else if (value > obj.value) recFunction(obj.right);
    };
    recFunction(this);
  }

  contains(value) {
    let containsValue = false;
    const recFunction = (obj) => {
      if (value === obj.value) containsValue = true;
      else if (value < obj.value && obj.left !== null) recFunction(obj.left);
      else if (value > obj.value && obj.right !== null) recFunction(obj.right);
    };
    recFunction(this);
    return containsValue;
  }
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb);
    if (this.right !== null) this.right.depthFirstForEach(cb);
  }
}

// like a tree
// two branches maximum

module.exports = BinarySearchTree;
