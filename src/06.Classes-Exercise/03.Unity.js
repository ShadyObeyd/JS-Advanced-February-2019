class Rat {
    constructor(name){
        this.name = name;
        this._rats = [];
    }

    unite(rat){
        if(this.constructor === rat.constructor){
            this._rats.push(rat);
        }
    }

    getRats(){
        return this._rats;
    }

    toString(){
        if(this._rats.length === 0){
            return this.name;
        }
        else {
            return this.name + '\n' + this._rats.map(r => `##${r.name}`).join('\n');
        }
    }
}

let test = new Rat("Pesho");
console.log(test.toString());

console.log(test.getRats());

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());

console.log(test.toString());