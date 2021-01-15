const fs = require("fs").promises;
const parse = require("csv-parse/lib/sync");
const stringify = require("csv-stringify");

const read = async (filename) => {
  const fileContent = await fs.readFile("./data/" + filename);
  const records = parse(fileContent, { columns: true });
  return records;
};

const write = async (filename, data) => {
  stringify(
    data,
    {
      header: true,
    },
    (err, output) => {
      fs.writeFile("./output/" + filename, output);
    }
  );
};

module.exports = { read, write };
