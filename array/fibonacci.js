/*<<<<<<<<<<<<<<<<<<<-------------------------- Using foor loop ----------------------->>>>>>>>>>>>>>> */

let num1 = 0
let num2 = 1
let newFib 

for(let i = 0; num2<20; i++){
    newFib = num1+num2
    num1 = num2
    num2 = newFib
    console.log(newFib);
}




/*<<<<<<<<<<<<<<<<<<<-------------------------- Using for in ----------------------->>>>>>>>>>>>>>> */

let nums1 = 0
let nums2 = 1
let totalCount = Array.from({length:20})
let newFibno

for (let i in totalCount){
    newFibno = nums1+nums2
    nums1 = nums2
    nums2= newFibno
    console.log(newFibno);
}