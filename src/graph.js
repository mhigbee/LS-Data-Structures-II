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
    this.graph[newNode] = node;
    if (Object.keys(this.graph).length === 2) {
      // graph.1st object set the edge to 2nd object
      // graph.2nd object set the edget to the 1st object
      // push the edges into 1st object and vice versa
      const firstObjectKeyName = Objects.keys(this.graph)[0];
      const secondObjectKeyName = Objects.keys(this.graph)[1];
      const firstObject = this.graph[firstObjectKeyName];
      const secondObject = this.graph[secondObjectKeyName];
      this.graph[secondObjectKeyName].edges.push(firstObject);
      this.graph[firstObjectKeyName].edges.push(secondObject);
      //;
    }
    if (this.graph.hasOwnProperty(toNode)) {
      this.graph[newNode].edges.push(this.graph[toNode]);
    }
  }

  contains(value) {
    // take a value (name of the object)
    // loop through the graph object and check the object names
    // if it is found return true
    // else return false
    Object.keys(this.graph).forEach((key) => {
      if (value === key) return true;
    });
    return false;
  }

  removeNode(value) {
    let foundNode = false;
    Object.keys(this.graph).forEach((key) => {
      if (value === key) {
        const currentValueEdgesArray = this.graph[value].edges;
        currentValueEdgesArray.forEach((element) => {
          for (let i = 0; i < element.edges; i++) {
            if (element.edges[i] === this.graph[value]) {
              delete element.edges[i];
              break;
            }
          }
        });
        // delete this.graph[value];
        // return true;
        delete this.graph[value];
        foundNode = true;
      };
    });
    return foundNode;
  }

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

// class Graph {
//   constructor() {
//     this.graph = {};
//   }
//   addNode(newNode, toNode) {
//     this.graph[newNode] = {};
//     this.graph[newNode].edges = [];
//     if (Object.keys(this.graph).length === 2 && !toNode) {
//       Object.keys(this.graph).forEach((key) => {
//         if (key !== newNode) toNode = key;
//       });
//     }
//     if (toNode) {
//       this.graph[newNode].edges.push(toNode);
//       this.graph[toNode].edges.push(newNode);
//     }
//   }
  
//   contains(node) {
//     let hasNode = false;
//     Object.keys(this.graph).forEach(key => {
//       if (key === node) hasNode = true;
//     });
//     return hasNode;
//   }
  
//   removeNode(node) {
//     delete this.graph[node];
//     Object.keys(this.graph).forEach((key) => {
//       const index = this.graph[key].edges.indexOf(node);
//       if (index === -1) return;
//       this.graph[key].edges.splice(index, 1);
//     });
//   }
  
//   getEdge(fromNode, toNode) {
//     const fromNodeHasEdge = this.graph[fromNode].edges.includes(toNode); // true or false
//     const toNodeHasEdge = this.graph[toNode].edges.includes(fromNode);
//     return fromNodeHasEdge && toNodeHasEdge;
//   }
  
//   addEdge(fromNode, toNode) {
//     const fromHasEdge = this.graph[fromNode].edges.includes(toNode);
//     const toNodeHasEdge = this.graph[toNode].edges.includes(fromNode);
//     if (!fromHasEdge) this.graph[fromNode].edges.push(toNode);
//     if (!toNodeHasEdge) this.graph[toNode].edges.push(fromNode);
//   }
  
//   removeEdge(fromNode, toNode) {
//     const indexOfFrom = this.graph[fromNode].edges.indexOf(toNode);
//     const indexOfTo = this.graph[toNode].edges.indexOf(fromNode);
//     this.graph[fromNode].edges.splice(indexOfFrom, 1);
//     this.graph[toNode].edges.splice(indexOfTo, 1);
//     if (!this.graph[fromNode].edges.length) delete this.graph[fromNode];
//     if (!this.graph[toNode].edges.length) delete this.graph[toNode];
//   }
// }

// const graph = new Graph();

// graph.addNode('a');
// graph.addNode('b');
// console.log(graph.contains('a'));
