function Counter(){
    let currentDate = new Date();
    console.log(currentDate.getHours() +":"+currentDate.getMinutes()+":"+currentDate.getSeconds());
    if(currentDate.getHours() > 12){
        console.log(currentDate.getHours() +":"+currentDate.getMinutes()+":"+currentDate.getSeconds() +" PM");
    }else{
        console.log(currentDate.getHours() +":"+currentDate.getMinutes()+":"+currentDate.getSeconds()+" AM");
    }
}

setInterval(Counter, 1000);