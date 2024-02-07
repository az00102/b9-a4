function calculateMoney(soldTicket){
    if (soldTicket < 0){
        return 'Invalid Number';
    }
    else{
        return ((120 * soldTicket)-(500 + (8 * 50)));
    }
    
}

const soldTicket = 10;
console.log(calculateMoney(soldTicket));