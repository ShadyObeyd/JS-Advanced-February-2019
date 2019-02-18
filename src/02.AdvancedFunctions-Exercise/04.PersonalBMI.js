function solve(name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height},
        BMI: Math.round(weight /(height * height / 10000))
    };

    let status = '';

    if(obj.BMI < 18.5){
        status = 'underweight'
    }
    else if(obj.BMI < 25){
        status = 'normal'
    }
    else if(obj.BMI < 30){
        status = 'overweight'
    }
    else {
        status = 'obese'
    }

    obj['status'] = status;

    if(status === 'obese'){
        obj['recommendation'] = 'admission required';
    }

    return obj;
}

solve('Honey Boo Boo', 9, 57, 137);