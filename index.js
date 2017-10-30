const program = require('commander');

var fs = require("fs");
// Require logic.js file and extract controller functions using JS destructuring assignment

program
  .version('0.0.1')
  .description('Contact management system');

program
  .command('project <name>')
  .alias('p')
  .description('Get contact')
  .action(function (name) {
    var createStream = fs.createWriteStream("JournalDEV.txt");
    createStream.end();
    console.info("creates something", name);
  });

program.parse(process.argv);