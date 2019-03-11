function attachGradientEvents() {
    $('#gradient').on('mousemove', (e) => {
        let dist = Math.floor((e.offsetX / (e.target.clientWidth - 1)) * 100);
        $('#result').text(dist + '%');
    });
}