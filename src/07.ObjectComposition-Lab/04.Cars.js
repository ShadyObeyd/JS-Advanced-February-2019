function solve(stringArr) {
    let buildCarBuilder = function () {
        let cars = {};

        return {
            create: name => cars[name] = {},
            inherits: (name, parent) => Object.setPrototypeOf(cars[name], cars[parent]),
            set: (name, key, value) => cars[name][key] = value,
            print: name => {
                let result = [];
                for (let carKey in cars[name]) {
                    result.push(`${carKey}:${cars[name][carKey]}`);
                }

                console.log(result.join(', '));
            }
        }
    };

    let carBuilder = buildCarBuilder();

    for(let str of stringArr){
        let strTokens = str.split(' ').filter(s => s !== ' ');

        let command = strTokens[0];
        let args = strTokens.slice(1);

        if(command === 'create'){
            carBuilder.create(args[0]);

            if(args[1] === 'inherit'){
                carBuilder.inherits(args[0], args[2]);
            }
        }
        else {
            carBuilder[command](args[0], args[1], args[2]);
        }
    }
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);