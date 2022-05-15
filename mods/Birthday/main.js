const config = {
	'name': 'Birthday',
	'author': 'Charles Shan',
	'version': '0.0.1',
	'description': 'The Birthday plugin helps you remember the birthdays of everyone around you and sets up birthday gift reminders for that person.',
	'html': 'index.html'
}

function init(){
}

const ipcMain = require('electron').ipcMain;

ipcMain.on('Birthday-ping', (event, arg) => {
  console.log(arg)
  event.sender.send('Birthday-ping-reply', {'valid':true,'content':'pong'})
})

function test(){
	console.log("Hello! Brithday!");
}
module.exports.test = test;


module.exports.config = config;
module.exports.init = init;