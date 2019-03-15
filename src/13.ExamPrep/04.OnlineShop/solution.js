function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let productInput = $('.custom-select').first();
    let submitButton = $('#submit');

    productInput.on('keypress', () => {
        submitButton.removeAttr('disabled');
    });

    let currentCapacity = 0;
    let totalPrice = 0;

    submitButton.on('click', (e) => {
        let productName = productInput.val();
        let productPrice = Number($('#price').val());
        let productQuantity = Number($('#quantity').val());

        currentCapacity += productQuantity;
        totalPrice += productPrice;

        if(currentCapacity >= 150){
            $('#capacity').val('full').addClass('fullCapacity');
            submitButton.attr('disabled', true);
            productInput.attr('disabled', true);
            $('#price').attr('disabled', true);
            $('#quantity').attr('disabled', true);
        }
        else{
            $('#capacity').val(currentCapacity);
        }

        let liElement = $('<li>').text(`Product: ${productName} Price: ${productPrice} Quantity: ${productQuantity}`);
        $('#sum').val(totalPrice);

        $('.display').first().append(liElement);

        submitButton.attr('disabled', true);
        productInput.val('');
        $('#price').val('1');
        $('#quantity').val('1');
    });
}