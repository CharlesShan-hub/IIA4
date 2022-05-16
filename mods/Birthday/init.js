const config = {
	'name': 'Birthday',
	'author': 'Charles Shan',
	'version': '0.0.1',
	'description': 'The Birthday plugin helps you remember the birthdays of everyone around you and sets up birthday gift reminders for that person.',
	'html': 'index.html'
}
module.exports.config = config;

function init(){
}
module.exports.init = init;
module.exports.api = require('./main.js');