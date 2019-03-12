function attachEventsListeners() {
    let rates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    $('#convert').on('click', () => {
        let input = Number($('#inputDistance').val());

        let inputUnit = $('#inputUnits').val();
        let outputUnit = $('#outputUnits').val();

        let fromRate = rates[inputUnit];
        let toRate = rates[outputUnit];

        let result = input * fromRate / toRate;

        $('#outputDistance').val(result);
    });
}