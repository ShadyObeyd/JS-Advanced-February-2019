function solve(stringArr, sortingCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    for(let str of stringArr){
        let strTokens = str.split('|');

        let ticketDestination = strTokens[0];
        let price = strTokens[1];
        let status = strTokens[2];

        let ticket = new Ticket(ticketDestination, price, status);

        tickets.push(ticket);
    }

    let sortingCriteriaInput = arguments[1];

    if(sortingCriteriaInput === 'destination'){
        return tickets.sort((a, b) => {
           return a.destination.localeCompare(b.destination);
        });
    }
    else if(sortingCriteriaInput === 'status'){
        return tickets.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    }
    else if(sortingCriteriaInput === 'price'){
        return tickets.sort((a, b) => {
           return a.price - b.price;
        });
    }
}

console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));