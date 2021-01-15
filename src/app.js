const csv = require("./csv-io");
const graphGenerator = require("./graphGenerator");

const main = async (filename) => {
  const records = await csv.read(filename);
  const graph = graphGenerator.getGraphFromRecords(records);
  console.log("Graph and Node Pairs for filename: " + filename);
  graph.printGraph();
  const pairs = graph.getAllNeighborPairs();
  console.log(pairs);
  csv.write("output_" + filename, pairs);
};

module.exports = { main };
