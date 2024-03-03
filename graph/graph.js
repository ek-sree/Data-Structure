class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }

  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1] || this.adjacencyList[vertex2]){
        return false
    }
    return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
  }

    dfs(startingVertex){
      const result =[]
      const visited ={}

      const dfsHelper=(vertex)=>{
        if(!vertex){
          return null
        }
        visited[vertex]= true
        result.push(vertex)
        this.adjacencyList[vertex].forEach(elements => {
          if(!visited[elements]){
            return dfsHelper(elements)
          }
        });
      }
      dfsHelper(startingVertex)
      return result
    }


    bfs(startingVertex){
      const queue=[startingVertex]
      const visited ={}
      const result =[]

      visited[startingVertex]=true
      while(queue.length){
        let currentVertex = queue.shift()
        result.push(currentVertex)
        this.adjacencyList[currentVertex].forEach(neighbour=>{
          if(!visited[neighbour]){
            visited[neighbour]=true
            queue.push(neighbour)
          }
        })
      }
      return result
    }


  display(){
    for(let vertex in this.adjacencyList){
        console.log(vertex+ '->' +[...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges("A",'B')
graph.addEdges("B",'C')

graph.display()
console.log("////////");
graph.removeEdge('C','B')
graph.display()

console.log("////////");
graph.removeVertex('A')
graph.display()

console.log(graph.hasEdge('A','B'));