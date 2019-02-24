class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2){
        let x = Math.pow((point2.x - point1.x), 2);
        let y = Math.pow((point2.y - point1.y), 2);

        return Math.sqrt(x + y);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));