function solve(arr, startIndex, endIndex) {

    if(!Array.isArray(arr)){
        return NaN;
    }

    if(arr.length === 0){
        return 0;
    }

    if(startIndex < 0){
        startIndex = 0;
    }

    if(endIndex >= arr.length){
        endIndex = arr.length - 1;
    }

    if(arr.some(e => isNaN(e))){
        return NaN;
    }

    return arr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((a, b) => a + b);
}

solve('text', 0, 2);