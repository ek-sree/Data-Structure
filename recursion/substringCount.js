function countString(string, substring){
    if(string.length < substring.length){
        return 0;
    }
    if(string.substring(0,substring.length) == substring){
        return 1 + countString(string.substring(1),substring);
    } else {
        return countString(string.substring(1), substring); 
    }
}

console.log(countString('hihiushdiahdhihih', 'hi')); 
