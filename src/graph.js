class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) this.adjList.set(v, []);
  }

  addEdge(v, w) {
    if (this.adjList.get(v).some((entry) => entry.vertex === w)) {
      const elementV = this.adjList.get(v).find((entry) => entry.vertex === w);
      elementV.weight++;
      const elementW = this.adjList.get(w).find((entry) => entry.vertex === v);
      elementW.weight++;
    } else {
      this.adjList.get(v).push({ vertex: w, weight: 1 });
      this.adjList.get(w).push({ vertex: v, weight: 1 });
    }
  }

  getAllNeighborPairs() {
    const pairs = [];
    const visited = [];
    const vertices = this.adjList.keys();
    for (let vertex of vertices) {
      const neighbors = this.adjList.get(vertex);
      neighbors.map((neighbor) => {
        if (!visited[vertex + neighbor.vertex]) {
          visited[neighbor.vertex + vertex] = true;
          pairs.push({
            node1: vertex,
            node2: neighbor.vertex,
            weight: neighbor.weight,
          });
        }
      });
    }

    return pairs;
  }

  printGraph() {
    const vertices = this.adjList.keys();
    for (let vertex of vertices) {
      let list = "";
      const neighbors = this.adjList.get(vertex);
      neighbors.map((neighbor) => {
        list += "{" + neighbor.vertex + "," + neighbor.weight + "} ";
      });
      console.log(vertex + " -> " + list);
    }
  }
}

module.exports = Graph;
