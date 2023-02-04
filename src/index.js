const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const array = [];
    for (let i = 0; i < expr.length; i+=10){
        array.push(expr.slice(i, i+10))
    }
    let result = []
    array.forEach((element) => {
        let string = ''
        if (element === '**********'){
            result.push(' ')
        }else {
            for(let i = 0; i < element.length; i+=2){
                if (Number(element.slice(i, i+2)) === 10){
                    string += '.'
                }else if (Number(element.slice(i, i+2)) === 11){
                    string += '-'
                }
            }
        }
        Object.keys(MORSE_TABLE).forEach((key, i) =>{
            if (key === string){
                result.push(Object.values( MORSE_TABLE)[i])
            }
        })
    })
    return result.join('')
}
module.exports = {
    decode
}

