const fs = require("fs");
const path = require("path");
const runPaths = ["client","server"];
const resolvePath = "../";

// getProjectInstallCommand();

function runAllProcess(){

}

function install(){
    let install_pm2_command = "cnpm install pm2 -g";
    
} 

function getProjectInstallCommand(){
    var command = "";
    var p = 0;
    (function recursivePath(p){
        if(p >= runPaths.length){
            return command;
        }
        let readPath = resolvePath + runPaths[p] + "/";
        
    })(p)
}

function readdirSync(path){
    return new Promise((resolve,reject) => {
        fs.readdir(path,(err,files) => {
            if(err){
                reject();
            }
            resolve(files);
        })
    })
}

async function f1(){
    return await readdirSync("../client/");
}

f1().then(function(res){
    console.log(res);
})

