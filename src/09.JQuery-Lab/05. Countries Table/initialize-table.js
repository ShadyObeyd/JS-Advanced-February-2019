function initializeTable() {
    appendRow('Bulgaria', 'Sofia');
    appendRow('Germany', 'Berlin');
    appendRow('Russia', 'Moscow');
    fixLinks();

    $('#createLink').on('click', () => {
        let countryInput = $('#newCountryText').val();
        let capitalInput = $('#newCapitalText').val();

        appendRow(countryInput, capitalInput);
        fixLinks();
    });

    function appendRow(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($("<a href='#'>[Up]</a>").on('click', moveRowUp))
                .append($("<a href='#'>[Down]</a>").on('click', moveRowDown))
                .append($("<a href='#'>[Delete]</a>").on('click', deleteRow)));


        $('#countriesTable').append(row);
    }
    
    function moveRowUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
        fixLinks();
    }
    
    function moveRowDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
        fixLinks();
    }
    
    function deleteRow() {
        let row = $(this).parent().parent();
        row.remove();
        fixLinks();
    }
    
    function fixLinks() {
        let rows = $('#countriesTable tr');

        $('#countriesTable a').css('display', 'inline');

        $(rows[2]).find('a:contains("[Up]")').css('display', 'none');
        $(rows[rows.length - 1]).find('a:contains("[Down]")').css('display', 'none');
    }
}