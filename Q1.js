function create_account(initial=0){
    let balance=initial;
    let history=[]
    return{
        deposit(amount){
            if (amount<=0){
                return("error")
            }
            balance += amount;
            history.push(`deposited sucessfully ${amount}`)
        
        },
        withdraw(amount){
            if(amount<=0){
                return("error enter valid number")
            }
            if(amount>balance){
                return ("error invalid balance")
            }
            balance -= amount
            history.push(`withdraw ${amount}`)
        },
        getbalance(){
            return balance;
        },
        gettransctionhistory(){
            return history
        }
    }
}

const acccount = create_account(1000)
console.log(acccount.deposit(2000));
console.log(acccount.withdraw(200));
console.log(acccount.getbalance());
console.log(acccount.gettransctionhistory());




