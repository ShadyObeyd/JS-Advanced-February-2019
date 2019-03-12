function attachEventsListeners() {
    $('#daysBtn').on('click', () => {
        let days = Number($('#days').val());

        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        $('#hours').val(hours);
        $('#minutes').val(minutes);
        $('#seconds').val(seconds);
    });

    $('#hoursBtn').on('click', () => {
        let hours = Number($('#hours').val());

        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        $('#days').val(days);
        $('#minutes').val(minutes);
        $('#seconds').val(seconds);
    });

    $('#minutesBtn').on('click', () => {
        let minutes = Number($('#minutes').val());

        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;

        $('#days').val(days);
        $('#hours').val(hours);
        $('#seconds').val(seconds);
    });

    $('#secondsBtn').on('click', () => {
        let seconds = Number($('#seconds').val());

        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        $('#days').val(days);
        $('#hours').val(hours);
        $('#minutes').val(minutes);
    });
}