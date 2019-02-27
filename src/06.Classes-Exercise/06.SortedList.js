class SortedList {
    constructor(){
        this._list = [];
        this.size = 0;
    }

    add(element){
        let num = Number(element);
        if(isNaN(num)){
            throw new Error();
        }

        this._list.push(num);
        this.size = this._list.length;
        return this._list.sort((a, b) => a - b);
    }

    remove(index){
        if(index < 0 || index >= this._list.length){
            throw new Error();
        }

        this._list.splice(index, 1);
        this.size = this._list.length;
        return this._list.sort((a, b) => a- b);
    }

    get(index){
        if(index < 0 || index >= this._list.length){
            throw new Error();
        }

        return this._list[index];
    }
}
