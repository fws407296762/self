const fs = require("fs");
const path = require("path");
const runPaths = ["client","server"];
const resolvePath = __dirname.replace("bin","");
const child_process = require('child_process');

// child_process.exec("cd E:\project\self\client\tingshu && cnpm install",{},function(err, stdout, stderr){   //可以实现自动安装，但是这个自动安装有问题，就是不显示进度，直接把结果输出了
//     console.log(err, stdout, stderr)
// });

var _install = child_process.spawn("cnpm",["install"])
_install.stdout.on('data', function(data) { 
    console.log(`stdout: ${data}`);
});
_install.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});
function runAllProcess(){

}

function getProjectInstallCommand(){
    var command = "";
    var p = 0;
    (function recursivePath(p){
        if(p >= runPaths.length){
            return command;
        }
        let readPath = resolvePath + runPaths[p] + "\\";
        let projectPaths = fs.readdirSync(readPath);
        projectPaths.forEach(function(path,index){
            command += " && cd " +readPath + path +" && cnpm install";
        });
        p++;
        recursivePath(p);
    })(p);
    return command;
}

function install(){
    let installPm2Command = "cnpm install pm2 -g";
    let _getProjectInstallCommand = getProjectInstallCommand();    
    return installPm2Command + _getProjectInstallCommand;
} 


