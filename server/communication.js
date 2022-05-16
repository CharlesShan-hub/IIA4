const auth = require('./auth.js')
const loadMods = require('./loadMods.js')
loadMods.run();

const email = require('./email.js')
//email.sendTest()

function formatValid({arg, type=undefined, keys=undefined}){ 
  if(type!=undefined){
    if(typeof(arg)!=type){
      return false;
    }
  }
  if(keys!=undefined){
    keys.forEach((item,index,array)=>{
      if(arg.hasOwnProperty(item)==false){
        return false;
      }
    })
  }
  return true;
}

function run(){
  const ipcMain = require('electron').ipcMain;

  /**
   * Auth
   * 
   * login: Authentication email address and password
   * register: Register a new user
   * recoverpw: Change the password
   * 
   */

  ipcMain.on('login', (event, arg) => {
    console.log(arg)
    if(formatValid({arg,keys:['mail','password']})==false){
      event.sender.send('login-reply', {'valid':false,'login':false})
    }else{
      event.sender.send('login-reply', {'valid':true,'login':auth.auth(arg)})
    }
  })

  ipcMain.on('register', (event, arg) => {
    console.log(arg)
    if(formatValid({arg,keys:['password','mail','username']})==false){
      event.sender.send('register-reply', {'valid':false,'register':false})
    }else{
      event.sender.send('register-reply', {'valid':true,'register':auth.register(arg)})
    }
  })

  ipcMain.on('recoverpw', (event, arg) => {
    console.log(arg)
    if(formatValid({arg,keys:['password','newPassword','mail','username']})==false){
      event.sender.send('recoverpw-reply', {'valid':false,'recoverpw':false})
    }else{
      event.sender.send('recoverpw-reply', {'valid':true,'recoverpw':auth.recoverpw(arg)})
    }
  })

  /**
   * Mods
   * 
   * getMods: Gets the loaded mod info
   */

  ipcMain.on('getMods', (event, arg) => {
    console.log(arg)
    event.sender.send('getMods-reply', loadMods.getMods(arg))
    //if(formatValid({arg,keys:[]})==false){
    //  event.sender.send('getMods-reply', {'valid':false,'recoverpw':false})
    //}else{
    //  event.sender.send('getMods-reply', {'valid':true,'recoverpw':loadMods.getMods(arg)})
    //}
  })

  ipcMain.on('api', (event, arg) => {
    console.log(arg)
    event.returnValue = loadMods.api(arg)
  })
}

module.exports.run = run;