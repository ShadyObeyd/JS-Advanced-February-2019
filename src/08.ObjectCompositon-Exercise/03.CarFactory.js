function solve(obj) {
    return {
        model: obj.model,
        engine: getEngine(obj.power),
        carriage: getCarriage(obj.carriage, obj.color),
        wheels: getWheels(obj.wheelsize)
    };

    function getEngine(power) {
        let enginePower = 0;
        let engineVolume = 0;

        if(power <= 90){
            enginePower = 90;
            engineVolume = 1800;
        }
        else if(power > 90 && power <= 120){
            enginePower = 120;
            engineVolume = 2400;
        }
        else{
            enginePower = 200;
            engineVolume = 3500;
        }

        return {
            power: enginePower,
            volume: engineVolume
        };
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color: color
        };
    }

    function getWheels(wheelSize) {
        if(wheelSize % 2 === 0){
            wheelSize -= 1;
        }

        return [wheelSize, wheelSize, wheelSize, wheelSize]
    }
}

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));