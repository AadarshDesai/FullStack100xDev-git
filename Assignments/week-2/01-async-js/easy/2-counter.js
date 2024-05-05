let i = 0; 
function Counter(){
    i++;
    console.log(i);

    setTimeout(Counter, 1000);
}

Counter();