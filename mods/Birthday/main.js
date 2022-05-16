const ipcMain = require('electron').ipcMain;

ipcMain.on('Birthday-ping', (event, arg) => {
  console.log(arg)
  event.sender.send('Birthday-ping-reply', {'valid':true,'content':'pong'})
})

function test(){
	console.log("Hello! Brithday!");
	return "Hello! Brithday!"
}
module.exports.test = test;
