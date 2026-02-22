function createratelimiter(limit,timeIntervel){
    let callcount=0;
    setInterval(()=>{
        callcount=0; 
    },timeIntervel=0) 
    return function(){
        if (callcount<limit){
            callcount++
            return"request accepted"
        }
        else{
            return "rate limit exceed"
        }

    }

}


let a=createratelimiter(3,2000)
console.log((a()));
console.log((a()));
console.log((a()));
console.log((a()));
console.log((a()));
console.log((a()));
console.log((a()));

