/**
 * sqlit使用历程
 * 
 * 1. better-sqlite3第三方库:
 * 官网链接: https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md
 * 
 * 2. better-sqlite3与eletron中的node,abi版本需要对应，要手动调整node_module里边的一个文件：
 * 官网链接: https://github.com/JoshuaWise/better-sqlite3/releases
 * 
 */

const Database = require('better-sqlite3');
const db = new Database('./server/auth.db', { verbose: console.log });
db.prepare("create table if not exists auth(\
  name TEXT, \
  password TEXT, \
  mail TEXT PRIMARY KEY);").run();
const authGet = db.prepare('select * from auth where mail = ?');
const authAdd = db.prepare('insert into auth(name, password, mail) values(?, ?, ?)');
const authRec = db.prepare('UPDATE AUTH SET password = (?) WHERE mail = (?)');

function auth(arg){
  var info = authGet.get(arg.mail)
  if(info!=undefined)
    return(info.password == arg.password);
  else
    return false;
}

function register(arg){
  authAdd.run(arg.username, arg.password, arg.mail);
  return true;
}

function recoverpw(arg){
  if(auth(arg)==false){
    return false;
  }
  authRec.run(arg.newPassword, arg.mail);
  return true;
}

module.exports.auth = auth;
module.exports.register = register;
module.exports.recoverpw = recoverpw;