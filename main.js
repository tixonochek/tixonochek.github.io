var cash = 0;
var cashPerClickBuyed = 0;
var cashPerClickPrice = 100;
var cashPerClick = 1;

function OnCashButton(element) {
    cash += cashPerClick
    element.innerHTML = 'FREE MONEY (CLICK)</BR>You Balance - ' + cash + '$</BR>Cash Per Click - ' + cashPerClick + '';
}

function BuyCashPerClick(element) {
    if(cash >= 100) {
        cashPerClick += 1;
        cash -= cashPerClickPrice
        element.innerHTML = 'UPGRADE(Price - ' + cashPerClickPrice + '$) (Buyed - ' + cashPerClickBuyed + '):</BR>Cash Per Click +1 after buy!';
    } else {
        alert("You dont have money!")
    }
}

function BuyCashPerClick_10x() {
    var equvalent = 10;
    var eqPrice;
    eqPrice = cashPerClickPrice * equvalent
    if(cash >= eqPrice) {
        cashPerClick += equvalent;
        cash -= eqPrice;
    } else {
        alert("You dont have money!")
    }
}

function BuyCashPerClick_100x() {
    var equvalent = 100;
    var eqPrice;
    eqPrice = cashPerClickPrice * equvalent
    if(cash >= eqPrice) {
        cashPerClick += equvalent;
        cash -= eqPrice;
        } else {
        alert("You dont have money!")
    }
}

function BuyCashPerClick_1000x() {
    var equvalent = 1000;
    var eqPrice;
    eqPrice = cashPerClickPrice * equvalent
    if(cash >= eqPrice) {
        cashPerClick += equvalent;
        cash -= eqPrice;
        } else {
        alert("You dont have money!")
    }
}

function BuyCashPerClick_10000x() {
    var equvalent = 10000;
    var eqPrice;
    eqPrice = cashPerClickPrice * equvalent
    if(cash >= eqPrice) {
        cashPerClick += equvalent;
        cash -= eqPrice;
        } else {
        alert("You dont have money!")
    }
}

function BuyCashPerClick_100000x() {
    var equvalent = 100000;
    var eqPrice;
    eqPrice = cashPerClickPrice * equvalent
    if(cash >= eqPrice) {
        cashPerClick += equvalent;
        cash -= eqPrice;
        } else {
        alert("You dont have money!")
    }
}