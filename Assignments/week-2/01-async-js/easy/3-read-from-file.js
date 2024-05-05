const fs = require("fs");

function learnAsync(){
    let p = new Promise(function(resolve){
        fs.readFile("file.txt", "utf-8", function(err, data){
            console.log(data);
        });
    })
    return p;
}

async function main(){
    let result = await learnAsync();
    console.log(result);
}
main();

let a = 1;
for(let i=0; i<100000000; i++){
    a += i;
}
console.log(a);

