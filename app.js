const http = require('http');
const schedule = require('node-schedule');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  var rule = new schedule.RecurrenceRule();
  rule.minute = 10;
  
  var j = schedule.scheduleJob(rule, function(){
    console.log('The answer to life, the universe, and everything!');
  });
});


