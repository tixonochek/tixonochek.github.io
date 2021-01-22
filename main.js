var cash = 0;
var cashPerClickBuyed = 0;
var cashPerClickPrice = 10;
var cashPerClick = 1;

function OnCashButton(element) {
    cash += cashPerClick;
    element.innerHTML = 'FREE MONEY (CLICK)</BR>You Balance - ' + cash + '$</BR>Cash Per Click - ' + cashPerClick;
}

function BuyCashPerClick(element) {
    if(cash >= 10) {
        cashPerClick += 1;
        cash -= cashPerClickPrice
        element.innerHTML = 'UPGRADE(Price - ' + cashPerClickPrice + '$) (Buyed - ' + cashPerClickBuyed + '):</BR>Cash Per Click +1 after buy!';
    } else {
        alert("You dont have money!")
    }
}