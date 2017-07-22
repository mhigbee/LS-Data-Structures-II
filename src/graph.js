/* eslint-disable */
class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(newNode, toNode) {
    const node = {
      value: newNode,
      edges: []
    };
    this.graph['newNode'] = node;
    if (Object.keys(this.graph).length === 2) {
      // graph.1st object set the edge to 2nd object
      // graph.2nd object set the edget to the 1st object
      // push the edges into 1st object and vice versa
      const firstObjectKey = Objects.keys(this.graph)[0];
      const secondObjectKey = Objects.keys(this.graph)[1];
      this.graph['secondObjectKey'].edges.push(firstObjectKey);
      this.graph['firstObjectKey'].edges.push(secondObjectKey);
      //;
    }
    if (this.graph.hasOwnProperty(toNode)) {
      this.graph[newNode].edges.push(toNode);
    }
  }

//   contains() {

//   }

//   removeNode() {

//   }

//   addEdge() {

//   }

//   getEdge() {

//   }

//   removeEdge() {

//   }
}

module.exports = Graph;

// should have methods named addNode, contains, removeNode, addEdge, getEdge, and 
// removeEdge
// addNode(newNode, toNode) should add a new item to the graph. If 
// toNode is given then the new node should share an edge with an existing 
// node toNode.
// contains(value) should return true if the graph contains the given value.
// removeNode(value) should remove the specified value from the graph.
// addEdge(fromNode, toNode) should add an edge between the two specified nodes.
// getEdge(fromNode, toNode) should return true if an edge exists between the 
// two specified graph nodes.
// removeEdge(fromNode, toNode) should remove the edge between the two 
// specified nodes.
// Extra Credit

// Add a method to the Graph class that searches through the graph using edges. 
// Make this search first as a depth first search and then refactor to a breadth 
// first search.