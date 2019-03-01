function solve(){
    return (() => {
        let list = [];
        let size = 0;

        let add = function (element) {
            let num = Number(element);
            if (isNaN(num)) {
                throw new Error();
            }

            list.push(num);
            this.size++;
            return list.sort((a, b) => a - b);
        };

        let remove = function (index) {
            if (index < 0 || index >= list.length) {
                throw new Error();
            }

            list.splice(index, 1);
            this.size--;
            return list.sort((a, b) => a - b);
        };

        let get = function (index) {
            if (index < 0 || index >= list.length) {
                throw new Error();
            }

            return list[index];
        };

        return {add, remove, get, size};
    })();
}