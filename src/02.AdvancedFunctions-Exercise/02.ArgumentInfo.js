function solve() {
    let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        let value = arguments[i];
        let type = typeof (value);

        console.log(`${type}: ${value}`);

        if(!summary[type]){
            summary[type] = 1;
        }
        else {
            summary[type]++;
        }
    }

    let sortedTypes = [];

    for(let obj in summary){
        sortedTypes.push([obj, summary[obj]]);
    }

    sortedTypes.sort((a, b) => {
        return b[1] - a[1]
    });

    for(let type of sortedTypes){
        console.log(`${type[0]} = ${type[1]}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });