var fs = require('fs');
var path = require('path');

const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('lib.txt')
});


var libAsJson = new Object();
var index = "";
var arr = [];
rl.on('line', (line) => {
    if(line.includes('END')){
        if(index != ""){
            libAsJson[index] = arr;
        }
        console.log(libAsJson);
    }else if(line.includes('===')){
        if(index != ""){
            libAsJson[index.toString()] = arr;
        }
        index = line.substring(3);
        arr = [];
    }else{
        arr.push(line.toString());
    }

    // console.log(libAsJson);

});
