function solve(arr, command) {
    let sortObj = {
        asc: () => arr.sort((a, b) => a - b),
        desc: () => arr.sort((a, b) => b - a)
    };

    return sortObj[command]();
}