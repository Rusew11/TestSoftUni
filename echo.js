function echo(param) {
    let type = typeof param;
    
    if(type == 'string' || type == 'string') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing')
    }
}

echo('Hello, JavaScript!');
echo(undefined);
echo(18);
echo(null);