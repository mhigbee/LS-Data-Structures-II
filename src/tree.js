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
    // if (this.node.children[0] === undefined) {
    console.log(node);
    this.children.push(node);
    // } else {
    //   return node;
    // };
  //     if(parent) {
  //   parent.children.push(node);
  // } else {
  //   if(!this.root) {
  //     this.root = node;
  //   } else {
  //     return 'Root node is already assigned';
  //   }
  // }
  }

  // contains() {
  //   this;
  // }
}

module.exports = Tree;

// Should have the methods: addChild, and contains
// Each node on the tree should have a value property and a children array.
// addChild(value) should accept a value and add it to that node's children array.
// contains(value) should return true if the tree or its children the given value.
// When you add nodes to the children array use new Tree(value) to create the node.
// You can instantiate the Tree class inside of itself.
