const fs = require('fs')

// 加载mods名称
let modNames = []
  const files = fs.readdirSync('./mods')
  files.forEach(function (item, index) {
      let stat = fs.lstatSync("./mods/" + item)
      if (stat.isDirectory() === true) { 
        modNames.push(item)
      }
  })
//console.log(modNames);

// 加载mods
let mods = {}
for(var i=0;i<modNames.length;i++){
  console.log('Loading ',modNames[i])
  mods[modNames[i]] = require('../mods/'+modNames[i]+'/init.js')
  mods[modNames[i]]['config']['html'] = '../mods/'+modNames[i]+'/'+ mods[modNames[i]]['config']['html']
}
//console.log(mods);

// 为界面提供mods名称与页面路径
function getMods(arg){
  let result = {}
  for(var item in mods){
    result[mods[item]['config']['name']] = {
      //'config': mods[item]['config'],
      'html': mods[item]['config']['html']
    }
  }
  return result;
}

// 调用其他模块函数
function api(arg){
  return mods[arg.mods_name].api[arg.function_name]()
}

function run(){
  console.log(mods.Birthday.api);
  mods.Birthday.api.test();
}

module.exports.run = run;
module.exports.getMods = getMods;