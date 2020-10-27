const str = 'sdfardsjk afjwelfsdf';

// const regRex = /a/ig;

// regRex.test(str)

function match(str) {
    for(let c of str) {
        if (c == 'a') {
            return true
        }
    }
    return false;
}

match(str);
