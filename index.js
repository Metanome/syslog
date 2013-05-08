var Tail = require('metanome-tail');

var Syslog = module.exports = new Tail({
	path : '/var/log/messages',
	prefix : "syslog.messages",
	root : "jmanero.foobar"
});
Syslog.interval = 5;
