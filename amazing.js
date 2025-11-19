function amazing(num) {
    //find sum
    let numAsString = String(num);

    let sum = 0;

    for(let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    
    //console.log(sum);
    //scan for 9
    let sumAsString = String(num);
    let isAmazing = 'False';

    for(let i = 0; i < numAsString.length; i++) {
        if(sumAsString[i] == '9') {
            isAmazing = 'True';
        }

        console.log(sumAsString[i]);
    }
    //print the rtesult
    console.log(`${num} Amazing? ${isAmazing}`);

}

amazing(9239);
console.log('---');
amazing(999);
console.log('---');
amazing(127);
console.log('---');
amazing(991);
console.log('---');