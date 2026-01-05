function computerStore(arr) {
    let priceNoTax = 0;
    let command = arr.shift();

    while (command != 'special' && command != 'regular') {
        let price= Number(command);

        if (price <= 0) {
            console.log("Invalid price!");
            command = arr.shift();
            continue;
        }

        priceNoTax += price;


        command = arr.shift();
    }

    if(priceNoTax == 0) {
        console.log("Invalid order!");
    } else {
        let tax = 0.20 * priceNoTax;
        let priceWithTax = priceNoTax + tax;

        if (command == 'special') {
            priceWithTax *= 0.90;
        }

        console.log('Congratulations you\'ve just bought a new computer');
        console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
    }
}