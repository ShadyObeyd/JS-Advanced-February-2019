function solve(arr) {
    let rectangles = [];
    for(let array of arr){
        let width = array[0];
        let height = array[1];

        let rectangle = {
            width,
            height,
            area: function () {
                return this.width * this.height
            },
            compareTo: function (other) {
                return other.area() - this.area() || other.width - this.width
            }
        };

        rectangles.push(rectangle);
    }

    return rectangles.sort((a, b) => a.compareTo(b));
}

console.log(solve([[10, 5], [3, 20], [5, 12]]));