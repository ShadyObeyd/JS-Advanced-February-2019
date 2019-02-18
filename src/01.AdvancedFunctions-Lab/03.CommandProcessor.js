function solve(arr) {
    let closure = (function () {
        let string = '';

        return {
            append: (s) => string += s,
            removeStart: (n) => string = string.slice(Number(n)),
            removeEnd: (n) => string = string.slice(0, string.length - Number(n)),
            print: () => console.log(string)
        }
    })();

    for(let str of arr){
        let commandTokens = str.split(' ');
        let command = commandTokens[0];
        let parameter = commandTokens[1];

        closure[command](parameter);
    }
}

solve(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);