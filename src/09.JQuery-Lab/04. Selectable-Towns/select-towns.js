function attachEvents() {
	$('li').on('click', function () {
	    let currentTownElement = $(this);

	    if(currentTownElement.attr('data-selected')){
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '');
        }
	    else {
            $(this).attr('data-selected', true);
            $(this).css('background-color', '#DDD');
        }
    });

	$('#showTownsButton').on('click', function () {
	    let selectedTowns = $('li[data-selected=true]').toArray().map(t => t.textContent).join(', ');

        $('#selectedTowns').text(selectedTowns);
    });
}