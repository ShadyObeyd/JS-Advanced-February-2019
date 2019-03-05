function search() {
    let searchedValue = $('#searchText').val();
    let towns = $(`#towns li:contains(${searchedValue})`);

    towns.css('font-weight', 'bold');

    $('#result').text(`${towns.length} matches found`);
}