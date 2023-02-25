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
    let num = 0;
    let str = "";
    while (num * 10 < expr.length) {
        let str2 = '';
        let code = expr.substr(num * 10, 10);
        if (code == '**********') {
            str += ' ';
            num++;
            continue;
        };
        for (let i = 0; i < code.length; i += 2) {
            switch(code.substr(i, 2)) {
                case '10':
                    str2 += ".";
                break;
                case '11':
                    str2 += "-";
                break;
            };
        };
        str += MORSE_TABLE[str2];
        num++;
    };
    return str;
}

module.exports = {
    decode
}