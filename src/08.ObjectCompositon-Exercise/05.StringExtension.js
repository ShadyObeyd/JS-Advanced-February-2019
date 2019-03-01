(() => {
    String.prototype.ensureStart = function (str) {
        if(!this.toString().startsWith(str)){
            return str + this.toString();
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(!this.toString().endsWith(str)){
            return this.toString() + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    };

    String.prototype.truncate = function (n) {
        if(n < 4){
            return '.'.repeat(n);
        }

        if(this.toString().length <= n){
            return this.toString();
        }
        else {
            if(this.toString().includes(' ')){
                let spaceIndex = this.toString().slice(0, n - 2).lastIndexOf(' ');

                return this.toString().slice(0, spaceIndex) + '...';
            }
            else{
                return this.toString().slice(0, n - 3) + '...';
            }
        }
    };
    
    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }

        return str;
    };
})();
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');

console.log(str);
