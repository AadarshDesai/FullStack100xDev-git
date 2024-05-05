const fs = require("fs");

function learnAsync(){
    let p = new Promise(function(resolve){
        fs.readFile("file.txt", "utf-8", function(err, data){
            data = data + " content added!";
            fs.writeFile("file.txt", data, function(err){
                if(err){
                    console.error(err);
                    return;
                }
            });
            console.log("data written to file - "+data);
        });
    })
    return p;
}

async function main(){
    let result = await learnAsync();
    console.log(result);
}
main();