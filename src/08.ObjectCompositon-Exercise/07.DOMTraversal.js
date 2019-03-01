function solve(selector) {
    let element = document.querySelector(selector);

    let deepestElement = element;
    let deepestCounter = 0;
    let bestCounter = 0;

    findDeepestNode(element);
    addClassToNodes(deepestElement);

    function findDeepestNode(element) {
        let children = Array.from(element.children);

        if(children.length > 0){
            for (let childElement of children) {
                deepestCounter++;
                findDeepestNode(childElement);
                deepestCounter--;
            }
        }
        else if (deepestCounter > bestCounter) {
            bestCounter = deepestCounter;
            deepestElement = element;
        }
    }

    function addClassToNodes(element) {
        element.classList.add('highlight');

        if(!element.matches(selector)){
            addClassToNodes(element.parentNode);
        }
    }
}