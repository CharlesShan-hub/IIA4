const {ipcRenderer} = window.nodeRequire('electron')
//console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

function loadMods(){
    ipcRenderer.on('getMods-reply', (event, arg) => {
      for(var item in arg){
        var li = document.createElement('li');
        li.innerHTML = "<a href="+arg[item].html+">"+item+"</a>"
        document.getElementById("ModsSideList").appendChild(li)
      }
    })
    ipcRenderer.send('getMods', {})
}
loadMods();