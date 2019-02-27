class Stringer {
    constructor(innerString, innerLength){
        this.innerString = innerString;
        if(innerLength <= 0){
            this.innerLength = 0;
        }
        else{
            this.innerLength = innerLength;
        }
    }

    increase(num){
        this.innerLength += num;
        if(this.innerLength <= 0){
            this.innerLength = 0;
        }
    }

    decrease(num){
        this.innerLength -= num;

        if(this.innerLength <= 0){
            this.innerLength = 0;
        }
    }

    toString(){
        let result = this.innerString.slice(0, this.innerLength);

        if(this.innerString.length > this.innerLength){
            result += '...';
        }

        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString());

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString());