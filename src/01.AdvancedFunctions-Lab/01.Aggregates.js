function solve(nums) {
    console.log('Sum = ' + nums.reduce((a, b) => a + b));
    console.log('Min = ' + nums.reduce((a, b) => Math.min(a, b)));
    console.log('Max = ' + nums.reduce((a, b) => Math.max(a, b)));
    console.log('Product = ' + nums.reduce((a, b) => a * b));
    console.log('Join = ' + nums.join(''));
}

solve([2, 3, 10, 5]);