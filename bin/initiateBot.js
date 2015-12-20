'use strict';

var SuperBot = require('../lib/superbot');

var token = process.env.BOT_API_KEY;
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var superbot = new SuperBot({
    token: token,
    dbPath: dbPath,
    name: name
});

superbot.run();