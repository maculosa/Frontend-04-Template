function StringToNumber(str) {
    const regBin = /^0b([0-1]+$)/
    const regHex = /^0x([0-9a-f]+$)/
    const regOct = /^0o([0-7]+$)/
    const regDec = /^[+-]?(\d*(e\d*)?$)/

    const toBaseNum = (nstr, pattern, baseNum) => {
        let num = nstr.replace(pattern, ($1, $2) => $2)
        let i = len = num.length;
        let result = 0;
        if (baseNum !== 16) {
            while (i--) {
                result += num.charAt(len - i - 1) * baseNum ** (i)
            }
        } else {
            const hexMap = {
                a: 10, b: 11, c: 12, d: 13, e: 14, f: 15
            }
            while (i--) {
                let targetNum = num.charAt(len - i - 1);
                if (targetNum.charCodeAt() >= 97) {
                    targetNum = hexMap[targetNum]
                }
                result += targetNum * baseNum ** (i)
            }
        }
        return result
    }

    if (typeof str !== 'string') return console.log('StringToNumber\'s param is not type of string')

    if (regBin.test(str)) {
        return toBaseNum(str, regBin, 2)
    } else if (regOct.test(str)) {
        return toBaseNum(str, regOct, 8)
    } else if (regDec.test(str)) {
        return toBaseNum(str, regDec, 10)
    } else if (regHex.test(str)) {
        return toBaseNum(str, regHex, 16)
    } else {
        return console.log(`无法将 String: '${str}' 转换为数字`);
    }
}


// let a = StringToNumber('0b1001')  // '9'
// let b = StringToNumber('0o22') // '18'
// let c = StringToNumber('16') // '16'
// let d = StringToNumber('0xa') // '10'

// 公式：
// 二进制转化为十进制
// 1001
// 1*2**3 + 0*2**2 + 0*2**1 + 1*2**0 = 9
/* ------------------------------------- */
// 八进制转化为十进制
// 72
// 7*8**1 + 7*8**0 = 58
/* ------------------------------------- */
// 十进制
// 99
// 9*10**1 + 9*10**0 = 99
/* ------------------------------------- */
// 十六进制转化为十进制
// ef23
// e*16**3 + f*16**2 + 2*16**1 + 3*16**0
// 14*16**3 + 15*16**2 + 2*16**1 + 3*16**0
//    57344 +    3840  +  32     +  3   =   61219
/* ------------------------------------- */
// 十进制转化为 二进制
// 9
// 9 / 2 = 4    9 % 2 = 1
// 4 / 2 = 2    4 % 2 = 0
// 2 / 2 = 1    2 % 2 = 0
// 1 / 2 = 0    1 % 2 = 1

// 7
// 7 / 2 = 3    7 % 2 = 1
// 3 / 2 = 1    3 % 2 = 1
// 1 / 2 = 0    1 % 2 = 1

/* ------------------------------------- */
// 十进制转化为 十六进制
// 22
// 22 / 16 = 1  22 % 16 = 6
// 1 / 16 = 0   1 % 16 = 1





// TODO 数字转换字符串 带进制
function NumberToString(num, base = 10, flag=false) {
    if (typeof num !== 'number') return console.log('num 不是 number 类型')
    let temp_num = num;
    let result = []; // 转化后的进制数

    const toHexDigit = (num) => {
        switch (num) {
            case 10:
                return 'a'
            case 11:
                return 'b'
            case 12:
                return 'c'
            case 13:
                return 'd'
            case 14:
                return 'e'
            case 15:
                return 'f'
            default:
                return num;
        }
    }

    if (base !== 16) {
        result.push(temp_num % base);
        while (temp_num > 0) {
            temp_num = Math.floor(temp_num / base)
            if (temp_num > 0) {
                result.push(temp_num % base);
            }
        }
    } else {
        const digit = temp_num % base;
        result.push(toHexDigit(digit));
        while (temp_num > 0) {
            temp_num = Math.floor(temp_num / base)
            if (temp_num > 0) {
                const digit = temp_num % base;
                result.push(toHexDigit(digit));
            }
        }
    }

    result = result.reverse().join('')
    if (base === 10 || flag === false)
        return result
    else if (base === 2 && flag === true)
        return `0b${result}`
    else if (base === 8 && flag === true)
        return `0o${result}`
    else if (base === 16 && flag === true)
        return `0x${result}`
}




console.log(NumberToString(43819, 16))   // 0b0100