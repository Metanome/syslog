var Tail = require('metanome-tail');

var Syslog = module.exports = new Tail('/var/log/messages', "syslog.messages");
Syslog.interval = 5;
