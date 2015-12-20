# PJBot
This is a slack bot which sends you a P-Jokes of chuck norris when ever you talk about chuck norris

This slack bot uses slackbots and sqlite3 for sending Jokes for chuck norris when ever any one talks or mention chuck norris in his/her
conversions.

Slackbots is the kit which gives an easy way to use the slack apis.
Sqlite3 is used to store the chuck norris jokes so that whenever mentions him bot can fetch a joke from database and send it to that
particular channel.

The Internet Chuck Norris Database offers a very nice REST API that allows us to fetch a huge number of jokes about Chuck Norris,
so I already preconfigured the database file by importing all the jokes from there. 

#Usage:
* Clone the repo.
* Go into the repo and enter the command "npm install" . This will install slackbots ,sqlite3 and other required node modules.
* To run the bot use the command -
  -   BOT_API_KEY=<your token> BOT_NAME=<name of your bot> node ./bin/initiateBot.js 
