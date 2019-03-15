function addSticker() {
    let title = $('.title').first().val();
    let text = $('.content').first().val();

    if(title === '' || text === ''){
        return;
    }

    let closeButton = $('<a>').addClass('button').text('x');

    closeButton.on('click', (e) => {
        let target = $(e.target.parentNode);

        target.remove();
    });

    let titleElement = $('<h2>').text(title);
    let separator = $('<hr>');
    let contentElement = $('<p>').text(text);

    let listElement = $('<li>').addClass('note-content');

    listElement
        .append(closeButton)
        .append(titleElement)
        .append(separator)
        .append(contentElement);

    $('#sticker-list').append(listElement);

    $('.title').first().val('');
    $('.content').first().val('');
}