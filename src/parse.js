// This function changes the csv file into an array of JSON
// Need to install fast-csv via terminal by running the below:
// npm i fast-csv

const csv = require('fast-csv');
const fs = require('fs');

// make sure filepath is in the same directory
const filepath = "src/input.csv";

export const csvJSON = (csv_file) => {
  const stream = fs.createReadStream(csv_file);

  csv.parseStream(stream, { headers : true })
    .on("data", function(row){
      console.log(row);
   });
}

csvJSON(filepath);
