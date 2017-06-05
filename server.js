Slack = require('node-slackr');
slack= new Slack(WEBHOOK_URL, {
  channel: "#rebelscrum"
})

slack.notify("this is an automated test. this is done from node.js", function(err, result){
  console.log(err,result);
})
