function repeatNum(nums, target){
    
    let res = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] ==  target){
            res.push(i)
        }
        if(nums[i] !== target){
            return -1
        }
    }
    return  res
}

console.log(repeatNum([3,5,7,3,7,0,0,1,3,0],10));