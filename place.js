function place(word, symbol, match) {
    let result = '';

    for(let i = 0; i < word.length; i++)
    if(word[i] == '_'){
        result += symbol;
    } else {
        result += word[i];
    }

    if(match == result){
        console.log('Matched');
    } else {
        console.log('Not matched');
    }
}

place('Str_ng', 'I', 'Strong');
place('Str_ng', 'i', 'String');
place('H_llo', 'e', 'Hello');
place('_eorge', 'P', 'George');