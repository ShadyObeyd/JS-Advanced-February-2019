function timer() {
    let hoursElement = $('#hours');
    let minutesElement = $('#minutes');
    let secondsElement = $('#seconds');

    let startButtonClicked = 0;
    let timerPaused = false;
    let timer;

    $('#start-timer').on('click', () => {
        timer = setInterval(step, 1000);
        startButtonClicked++;

        if(startButtonClicked > 1 && !timerPaused){
            clearInterval(timer);
        }
    });

    $('#stop-timer').on('click', () => {
        clearInterval(timer);

        timerPaused = true;
    });

    function step() {
        let seconds = Number(secondsElement.text());
        let minutes = Number(minutesElement.text());
        let hours = Number(hoursElement.text());
        seconds++;

        if(seconds <= 9){
            secondsElement.text(`0${seconds}`);
        }
        else{
            secondsElement.text(seconds);
        }

        if(seconds === 60){
            secondsElement.text('00');
            minutes++;
        }

        if(minutes <= 9){
            minutesElement.text(`0${minutes}`)
        }
        else{
            minutesElement.text(minutes);
        }

        if(minutes === 60){
            minutesElement.text('00');
            hours++;
        }

        if(hours <= 9){
            hoursElement.text(`0${hours}`);
        }
        else{
            hoursElement.text(hours);
        }
    }
}