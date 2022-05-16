const config = {
	'name': 'Diary',
	'author': 'Charles Shan',
	'version': '0.0.1',
	'description': 'Diary',
	'html': 'index.html'
}
module.exports.config = config;

function init(){
}
module.exports.init = init;
module.exports.api = require('./main.js');