// function fib(n) {
//     if (n < 1)
//         return n;

//     const result = fib(n - 1) + fib(n - 2);
//     return result;
// }

// for (let i = 20; i >= 0; i--) {
//     const fibonacciNumber = fib(i);
//     console.log(Math.abs(fibonacciNumber));
// }
let obj={}
let arr = [5,3,5,9,7,9,1]

let i=arr.length-1
while(i>=0){
    if(!obj[arr[i]]){
        obj[arr[i]]=true
    }else{
        arr.splice(i,1)
    }
    i--
}
console.log(arr);