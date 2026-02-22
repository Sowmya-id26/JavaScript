function openAccount(start=0){
    let current_Balance=startAmount;
    let history=[];
    function record(type,amount){
        history.push({
            type:type,
            amount:amount,
            balance_After:current_Balance,
            date:new
Date().toLocalString()
        })
    }
    return{
        deposite: function(amount){
            if (typeof amount!=="number" || amount<=0){
                return "invalid amount"
            }
            current_Balance+=amount;
            record(amount)
            return("amount added sucessfully")
        },
        withdraw:function(amount){
            if (typeof amount !== "number" || amount<=0){
                return("invalid")
            }
            if (amount>current_Balance){
                return("transction failed")
            }
            current_Balance -= amount;
            record(amount)
            return('transcrition successfull')
        },
        get_Balance: function(){
            return(current_Balance)

        }
    }
 }
 
let myaccount=openAccount(3000)
console.log(myaccount.deposite);
console.log(myaccount.withdraw);
console.log(myaccount.get_Balance);


