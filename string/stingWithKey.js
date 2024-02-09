function alpha(str, key) {
    let newKey = key % 26;
    let char = [];

    for (let i = 0; i < str.length; i++) {
        let letterPosition = str.charCodeAt(i);

        if (letterPosition >= 97 && letterPosition <= 122) { 
            let shiftedPosition = letterPosition + newKey;

            if (shiftedPosition > 122) {
                shiftedPosition -= 26;
            }

            char[i] = String.fromCharCode(shiftedPosition);
        } else {
            char[i] = str[i]; 
        }
    }

    return char.join('');
}

let res = alpha("hai", 2);
console.log(res);
