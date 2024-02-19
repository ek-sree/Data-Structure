function isPrime(num,divisor=2){
    if(num < 2){
        return false
    }else if(num % divisor == 0){
        return false
    }else if(divisor * divisor >= num){
        return true
    }else{
        return isPrime(num, divisor+1)
    }
}

console.log(isPrime(5));
console.log(isPrime(4));