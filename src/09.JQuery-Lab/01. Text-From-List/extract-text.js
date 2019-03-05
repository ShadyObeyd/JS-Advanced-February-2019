function extractText() {
   let result = $('li').toArray().map(li => li.textContent).join(', ');

   let resultElement = $('#result');

   resultElement.text(result);
}