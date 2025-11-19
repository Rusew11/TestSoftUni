function intOrFloat(a, b, c){
    let sum = a + b + c;
    let sumAsString = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if(sumAsString[i] == '.') {
            isFloat = true;
        }
    }

    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);

}


intOrFloat(9, 100, 1.1);
intOrFloat(100, 200, 234);
intOrFloat(1, 2, 3.14);