// 写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。

const utf8_encoding = str => {
    let code = encodeURI(str);
    let codeList = [];
    let i = 0;
    while(i < code.length) {
        if(code[i] === '%') {
            codeList.push(parseInt(code[i+1] + code[i+2], 16));
            i += 3;
        } else {
            codeList.push(code[i].charCodeAt());
            i++
        }
    }
    return Buffer.from(codeList)
}


console.log('utf8_encoding: ', utf8_encoding('前端'))

const utf8_encoding2 = (str) => {
    let codeList = [];
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if(code <= 0x7f) {
            codeList.push(code)
        } else if( code <= 0x7ff) {
            codeList.push((code >> 6) | 192)
            codeList.push((code & 63) | 128)
        } else if(code <= 0xffff) {
            codeList.push((code >> 12) | 224)
            codeList.push(((code >> 6) & 63) | 128)
            codeList.push((code & 63) | 128)
        }
    }
    let binaryList = []
    for(const i of codeList) {
        binaryList.push(i.toString(2));
    }
    return binaryList;
    // return Buffer.from(codeList);

}

console.log('utf8_encoding2', utf8_encoding2('前端'))