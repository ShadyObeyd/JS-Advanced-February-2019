class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        this.shelf = [];
        if(room === 'livingRoom' || room === 'bedRoom' || room === 'closet'){
            this.shelfGenre = shelfGenre;
            this.room = room;
            this.shelfCapacity = shelfCapacity;
        }
        else {
            throw new Error(`Cannot have book shelf in ${room}`);
        }
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre){
        if(bookName === '' || bookAuthor === ''){
            return;
        }

        let book = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            genre: genre
        };

        if(this.shelf.length < this.shelfCapacity){
            this.shelf.push(book);
        }
        else{
            this.shelf.shift();
            this.shelf.unshift(book);
        }

        this.shelf = this.shelf.sort((a, b) => {
            return a.bookAuthor.localeCompare(b.bookAuthor)
        });

        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }

    showBooks(genre){
        let result = this.shelf.filter(b => b.genre === genre);

        let str = `Results for search "${genre}":\n`;

        for (let book of result) {
            str += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`;
        }

        return str.trim();
    }

    toString(){
        if(this.shelf.length === 0){
            return "It's an empty shelf";
        }

        let str = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;

        for (let book of this.shelf) {
            str += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
        }

        return str.trim();
    }
}
