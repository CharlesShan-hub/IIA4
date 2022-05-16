function crossRequire(mods_name){
  return require('../'+mods_name+'/init.js').api
}

function crossApi(mods_name,function_name){
  return require('../'+mods_name+'/init.js').api[function_name]
}

const ipcMain = require('electron').ipcMain;

ipcMain.on('Diary-ping', (event, arg) => {
  console.log(arg)
  event.sender.send('Diary-ping-reply', {'valid':true,'content':'pong'})
})

ipcMain.on('Diary-connetBirthday', (event, arg) => {
  console.log(arg)
  //const api = crossRequire(arg.mods_name)
  //console.log(api);
  //event.sender.send('Diary-connetBirthday-reply', {'valid':true,'content':api[arg.function_name]()})
  const birTest = crossApi('Birthday','test')
  event.sender.send('Diary-connetBirthday-reply', {'valid':true,'content':birTest()})
})

function test(){
	console.log("Hello! Diary!");
}
module.exports.test = test;
