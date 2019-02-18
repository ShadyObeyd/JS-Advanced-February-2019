function getArticleGenerator(articles) {
    let resultElement = document.getElementById('content');
    return function () {
        if(articles.length > 0){
            let nextArticle = articles[0];

            let articleElement = document.createElement('article');
            articleElement.textContent = nextArticle;

            resultElement.appendChild(articleElement);

            articles.shift();
        }
    }
}