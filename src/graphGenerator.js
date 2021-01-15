const Graph = require("./graph");

const getGraphFromRecords = (records) => {
  const shifts = new Map();

  records.map((record) => {
    const key = record.date + record.shift;
    if (shifts.has(key)) {
      shifts.get(key).push(record.volunteerName);
    } else {
      shifts.set(key, [record.volunteerName]);
    }
  });

  const graph = new Graph();

  const dateTimes = shifts.keys();
  for (let dateTime of dateTimes) {
    const volunteers = shifts.get(dateTime);
    volunteers.map((volunteer) => {
      graph.addVertex(volunteer);
    });

    for (let i = 0; i < volunteers.length - 1; i++) {
      for (let j = i + 1; j < volunteers.length; j++)
        graph.addEdge(volunteers[i], volunteers[j]);
    }
  }

  return graph;
};

module.exports = { getGraphFromRecords };
