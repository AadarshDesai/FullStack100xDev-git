const fs = require("fs");

function readData(){
    return new Promise(function(resolve){
        fs.readFile("file.txt", "utf-8", function(err, data){
            let temp = data.split(" ").filter(x => x != "");
            const finalData = temp.join(" ");
            resolve(finalData);
        });
    });
}

async function main(){
    let result = await readData();
    console.log(result);
}

main();

