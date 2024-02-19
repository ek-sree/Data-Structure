function truncate(str,maxlenth,add){
    if(str.length > maxlenth){
        return str.slice(0,maxlenth)+add
    }else{
        return -1
    }
}

console.log(truncate('sreehari',4,'...'));