function increment(selector) {
    let textArea = $('<textarea>').val(0).addClass('counter').attr('disabled', true);
    let incrementBtn = $('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment');
    let addBtn = $('<button>').addClass('btn').attr('id', 'addBtn').text('Add');
    let list = $('<ul>').addClass('results');

    let selectorElement = $(selector);

    selectorElement.append(textArea);
    selectorElement.append(incrementBtn);
    selectorElement.append(addBtn);
    selectorElement.append(list);

    incrementBtn.on('click', function () {
        let count = textArea.val();
        count++;
        textArea.val(count);
    });

    addBtn.on('click', function () {
        let count = textArea.val();
        let listItem = $('<li>').text(count);

        list.append(listItem);
    });
}