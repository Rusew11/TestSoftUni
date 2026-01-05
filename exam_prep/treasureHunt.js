function tresureHunt(arr) {
    let loot = arr.shift().split('|');
    let command = arr.shift()

    while (command != 'Yohoho!') {
        let tokens = command.split(' ');
        console.log(tokens);
        let action = tokens.shift();

        if (action == 'Loot') {
           let items = tokens.filter(item => !loot.includes(item));

           for (let item of items) {
            loot.unshift(item);
           }

        } else if (action == 'Drop') {
            let idx = Number(tokens.shift());

            if (idx >= 0 && idx < loot.length) {
                let removedItem = loot.splice(idx, 1).shift;
                loot.push(removedItem);
            }
        } else if (action == Steal) {
            let count = Number(tokens.shift());
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '))

        }

        command = arr.shift();
    }

}