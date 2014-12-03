'use strict';
const
  lineStreamReader = require('./linestreamreader.js'),
  fs = require('fs'),
  stream = fs.createReadStream(process.argv[3]),
  pattern = new RegExp(process.argv[2]),
  lineStream = lineStreamReader.connect(stream);


lineStream.on('line', function(line) {
  if (line.match(pattern)) {
      process.stdout.write("|\t" + line + '\n');
  }
});