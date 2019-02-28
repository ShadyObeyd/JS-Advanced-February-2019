function solve(commands) {
    let result = (function () {
        let list = [];
        return {
            add: str => list.push(str),
            remove: str => list = list.filter(s => s != str),
            print: () => console.log(list.join(','))
        };
    })();

    for (let command of commands) {
        let commandTokens = command.split(' ');
        result[commandTokens[0]](commandTokens[1]);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);