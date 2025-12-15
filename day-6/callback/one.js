function remindmelater(callback){
    //after 2seconds,run the callback
    setTimeout(()=>{
        callback();
    },5000);
}

function remind(){
    console.log("reminder:drink water");
    alert("reminder:drink water!");
}

//call the function
remindmelater(remind);