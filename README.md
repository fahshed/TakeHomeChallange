# Take Home Challange
Problem solution for "Kaan Pete Roi" software development intern position.

### How to Run
- Install **Node.js** in your system if it's not installed.
- Do an `npm install` to install two dependencies.
- Do `node index.js` or `npm start` to run the solution.
- Do `node test.js` or `npm test` to run the test.

### Input
- The csv files in the `data` folder are inputs.

### Output
- The corresponing outputs will be in `output` folder with same input file name adding a `'output_'` prefix in the beginning. 

### Processing
- The `main()` function in `app.js` file takes a csv filename from `data` folder as argument.  
  - Reads the records  of the file as json using `read()` funtion of the `csv-io` file.
  - Makes a graph out of the records using `getGraphFromRecords()` function of the `graghGenerator` file.
  - Gets the node pairs using `getAllNeighborPairs()` of the graph object. 
  - Prints the adjacency list and node pairs of the graph in console.
  - Writes the node pairs in a csv file with a name pattern of `"output_inputFileName.csv"` into the output folder. Writing is done using the `write()` method of `csv-io` file.
- In the `index.js` file `app.main()` is called with an argument of the provided input csv file name. 

### Testing
- In `test.js` file, for all the csv files in `data` folder `app.main()` method is called. By this, the outputs and console logs for all the files in data folder will be generated. 
