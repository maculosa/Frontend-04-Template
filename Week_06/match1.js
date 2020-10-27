function match(str) {
    let foundA = false;
    for(let c of str) {
        if(c == 'a') {
            foundA = true;
        } else if(foundA && c == 'b') {
            return true;
        } else {
            foundA = false;
        }
    }
    return false;
}
// 使用状态机处理字符串
function match(str) {
    let state = start;
    for(let c of str) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c == 'a') {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if(c === 'b') {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if(c === 'c') {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if(c === 'a') {
        return foundD;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if(c === 'b') {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if(c == 'x') {
        return end;
    } else {
        return foundB(c);
    }
}


console.log(match('sdfabcabxsdfa'));