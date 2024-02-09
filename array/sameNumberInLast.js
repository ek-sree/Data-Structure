let arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
let lastIdx = arr.length - 1;

function sameAtLast(num){
for (let i = 0; i <= lastIdx; ) {
    if (arr[i] === num) {
        [arr[i], arr[lastIdx]] = [arr[lastIdx], arr[i]];
        lastIdx--; 
    } else {
        i++; 
    }
}
return console.log(arr);

}
sameAtLast(6)