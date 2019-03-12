function addItem() {
    let newItemText = $('#newItemText').val();
    let newItemValue = $('#newItemValue').val();

    let optionElement = $('<option>').text(newItemText).val(newItemValue);

    $('#menu').append(optionElement);

    $('#newItemText').val('');
    $('#newItemValue').val('');
}