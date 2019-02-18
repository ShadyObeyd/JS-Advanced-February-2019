(() => {
    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    function restock(microElement, quantity) {
        elements[microElement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        if(recipe.toLowerCase() === 'apple'){
            let neededFlavours = quantity * 2;
            let message = '';
            if(elements['flavour'] < neededFlavours){
                message = 'Error: not enough flavour in stock';
            }
            else if(elements['carbohydrate'] < quantity){
                message = 'Error: not enough carbohydrate in stock'
            }
            else {
                elements['flavour'] -= neededFlavours;
                elements['carbohydrate'] -= quantity;
                message = 'Success';
            }

            return message;
        }
        else if(recipe.toLowerCase() === 'coke'){
            let neededCarbs = quantity * 10;
            let neededFlavours = quantity * 20;
            let message = '';
            if(elements['carbohydrate'] < neededCarbs){
                message = 'Error: not enough carbohydrate in stock';
            }
            else if(elements['flavour'] < neededFlavours){
                message = 'Error: not enough flavour in stock';
            }
            else {
                elements['carbohydrate'] -= neededCarbs;
                elements['flavour'] -= neededFlavours;
                message = 'Success';
            }

            return message;
        }
        else if(recipe.toLowerCase() === 'burger'){
            let neededCarbs = quantity * 5;
            let neededFats = quantity * 7;
            let neededFlavours = quantity * 3;
            let message = '';
            if(elements['carbohydrate'] < neededCarbs){
                message = 'Error: not enough carbohydrate in stock';
            }
            else if(elements['flavour'] < neededFlavours){
                message = 'Error: not enough flavour in stock';
            }
            else if(elements['fat'] < neededFats){
                message = 'Error: not enough fat in stock'
            }
            else{
                elements['carbohydrate'] -= neededCarbs;
                elements['flavour'] -= neededFlavours;
                elements['fat'] -= neededFats;
                message = 'Success';
            }

            return message;
        }
        else if(recipe.toLowerCase() === 'omelet'){
            let neededProtein = quantity * 5;
            let message = '';
            if(elements['protein'] < neededProtein){
                message = 'Error: not enough protein in stock'
            }
            else if(elements['fat'] < quantity){
                message = 'Error: not enough fat in stock'
            }
            else if(elements['flavour'] < quantity){
                message = 'Error: not enough flavour in stock'
            }
            else {
                elements['protein'] -= neededProtein;
                elements['fat'] -= quantity;
                elements['flavour'] -= quantity;
                message = 'Success';
            }

            return message;
        }
        else if(recipe.toLowerCase() === 'cheverme'){
            let neededProtein = quantity * 10;
            let neededCarbs = quantity * 10;
            let neededFats = quantity * 10;
            let neededFlavours = quantity * 10;
            let message = '';
            if(elements['protein'] < neededProtein){
                message = 'Error: not enough protein in stock';
            }
            else if(elements['carbohydrate'] < neededCarbs){
                message = 'Error: not enough carbohydrate in stock';
            }
            else if(elements['fat'] < neededFats){
                message = 'Error: not enough fat in stock'
            }
            else if(elements['flavour'] < neededFlavours){
                message = 'Error: not enough flavour in stock'
            }
            else{
                elements['protein'] -= neededProtein;
                elements['fat'] -= neededFats;
                elements['flavour'] -= neededFlavours;
                elements['carbohydrate'] -= neededCarbs;
                message = 'Success';
            }

            return message;
        }
    }

    function report() {
        return `protein=${elements['protein']} carbohydrate=${elements['carbohydrate']} fat=${elements['fat']} flavour=${elements['flavour']}`;
    }

    return (command) => {
        let commandTokens = command.split(' ');
        if(commandTokens[0] === 'report'){
            return report();
        }
        else if(commandTokens[0] === 'restock'){
            let microElement = commandTokens[1];
            let quantity = Number(commandTokens[2]);
            return restock(microElement, quantity);
        }
        else if(commandTokens[0] === 'prepare'){
            let recipe = commandTokens[1];
            let quantity = Number(commandTokens[2]);

            return prepare(recipe, quantity);
        }
    };
});