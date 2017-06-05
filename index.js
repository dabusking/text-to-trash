Slack = require('node-slackr');
slack= new Slack('https://hooks.slack.com/services/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', {
  channel: "#rebelscrum"
})

slack.notify("this is an automated test. this is done from node.js", function(err, result){
  console.log(err,result);
})
