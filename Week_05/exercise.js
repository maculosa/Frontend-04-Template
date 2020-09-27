function StringToNumber(str) {
    const regBinary = /^0b([0-1]+$)/
    const regHexa = /^0x([0-9a-f]+$)/
    const regOctal = /^0o([0-7]+$)/
    const regHex = /^[+-]?(\d*(e\d*)?$)/

    function toBaseNum(nstr, pattern, baseNum) {
        let num = nstr.replace(pattern, ($1, $2) => $2)
        let i = len = num.length;
        let result = 0;
        if(baseNum !== 16) {
            while(i--) {
                result += num.charAt(len - i - 1) * baseNum**(i)
            }
        } else {
            const hexaMap = {
                a: 10, b: 11, c: 12, d: 13, e: 14, f: 15
            }
            while(i--) {
                let targetNum = num.charAt(len - i - 1);
                if(targetNum.charCodeAt() >= 97) {
                    targetNum = hexaMap[targetNum]
                }
                result += targetNum * baseNum ** (i)
            }
        }
        return result
    }

    if(typeof str !== 'string') return console.log('StringToNumber\'s param is not type of string')

    if(regBinary.test(str)){
       return toBaseNum(str, regBinary, 2)
    } else if(regOctal.test(str)) {
        return toBaseNum(str, regOctal, 8)
    } else if(regHex.test(str)) {
        return toBaseNum(str, regHex, 10)
    } else if(regHexa.test(str)) {
        return toBaseNum(str, regHexa, 16)
    } else {
        return console.log(`无法将 String: '${str}' 转换为数字`);
    }

    
}


let a = StringToNumber('0b1001')  // '9'
// let b = StringToNumber('0o22') // '18'
// let c = StringToNumber('16') // '16'
// let d = StringToNumber('0xa') // '10'

console.log(a)
// console.log(StringToNumber('aad2123'))
