class Kitchen {
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products){
        for(let product of products){
            let productTokens = product.split(' ').filter(p => p !== ' ');

            let productName = productTokens[0];
            let productQuantity = Number(productTokens[1]);
            let productPrice = Number(productTokens[2]);

            if(this.budget >= productPrice){
                if(!this.productsInStock[productName]){
                    this.productsInStock[productName] = productQuantity;
                }
                else{
                    this.productsInStock[productName] += productQuantity;
                }

                this.budget -= productPrice;

                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            }
            else{
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price){

        if(this.menu[meal]){
            return `The ${meal} is already in our menu, try something different.`;
        }

        let mealObj = {
            meal: meal,
            products: neededProducts,
            price: price
        };

        this.menu[meal] = mealObj;
        return `Great idea! Now with the ${mealObj.meal} we have ${this.menu.length} meals in the menu, other ideas?`;

    }

    showTheMenu(){
        if(Object.keys(this.menu).length === 0){
            return 'Our menu is not ready yet, please come later...';
        }

        let menu = [];

        for(let key in this.menu){
            menu.push(`${key} - $ ${this.menu[key].price}`);
        }

        return menu.join('\n').trim() + '\n';
    }

    makeTheOrder(meal){
        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let menuMeal = this.menu[meal];

        for(let product of menuMeal.products){

            let productTokens = product.split(' ').filter(p => p !== ' ');

            let productName = productTokens[0];
            let productQuantity = Number(productTokens[1]);

            if(!this.productsInStock[productName]){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            let availableQuantity = this.productsInStock[productName];

            if(availableQuantity < productQuantity){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            this.productsInStock[productName] -= productQuantity;
        }

        this.budget += menuMeal.price;
        return `Your order (${menuMeal.meal}) will be completed in the next 30 minutes and will cost you ${menuMeal.price}.`;
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYogurt'));