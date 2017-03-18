
var program = require('commander');

program
  .version('0.0.1')
  .option('-t, --token [value]', 'Set access token')
  .option('-a, --action [value]', 'Select action', /^(push-project|pull-project|get-projects|get-hubs)$/i)
  .option('-h, --hub [value]', 'Select hub type')
  .parse(process.argv);
 
console.log('token %s', program.token);

if (typeof program.action !== 'function') 
  console.log('action %s', program.action);

if (program.hub)
  console.log('hub: %s', program.hub);
