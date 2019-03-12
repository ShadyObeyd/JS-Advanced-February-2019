function subtract() {
    let firstNum = Number($('#firstNumber').val());
    let secondNum = Number($('#secondNumber').val());

    let resultDiv = $('#result');

    resultDiv.text(firstNum - secondNum);
}