class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const node = new Tree(value);
    // create the node
    // if the tree has no root, this node should be the root or the first node
    // if not, this node, should be a child of the parent node
    this.children.push(node);
  }

  contains(value) {
    // recursive
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        return true;
      }
    }
    return false;
    // return true or false
  }
}

module.exports = Tree;

// Should have the methods: addChild, and contains
// Each node on the tree should have a value property and a children array.
// addChild(value) should accept a value and add it to that node's children array.
// contains(value) should return true if the tree or its children the given value.
// When you add nodes to the children array use new Tree(value) to create the node.
// You can instantiate the Tree class inside of itself.
