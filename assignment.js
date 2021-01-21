// kilometerToMeter

function kilometerToMeter(km) {
    if (km < 0 || typeof km != "number") {
        return "wrong keyword, please input correct number";
    }
    var meter = km * 1000;
    return meter;

}

console.log(kilometerToMeter(5));

//budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0 || typeof watch != "number" || typeof phone != "number" || typeof laptop != "number") {
        return "wrong Quntity Value"
    }
    var watchprice = 50 * watch;
    var phoneprice = 100 * phone;
    var laptopprice = 500 * laptop;
    var totalprice = watchprice + phoneprice + laptopprice;
    return totalprice;

}

var allprice = budgetCalculator(1, 1, 1);
console.log(allprice);



// hotelCost

function hotelCost(days) {
    if (days < 0 || typeof days != "number") {
        return "wrong keyword, please input correct number";
    }
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var cost1 = 10 * 100;
        var deleteDay = days - 10;
        var cost2 = deleteDay * 80;
        cost = cost1 + cost2;
    } else if (days > 20) {
        var cost1 = 10 * 100;
        var cost2 = 10 * 80;
        var deleteDay = days - 20;
        var cost3 = deleteDay * 50

        cost = cost1 + cost2 + cost3;

    }
    return cost;


}

console.log(hotelCost(30));


// megaFriend

var friend = ["Kamal", "Jamal Hossen", "Tomal Khan"];

function megaFriend(friends) {
    if (typeof friends != "object" || friends.length == 0) {
        return "wrong input please enter correct name"
    }

    var maximum = friends[0];

    for (var i = 0; i < friends.length; i++) {
        var fname = friends[i];
        if (fname.length > maximum.length) {
            maximum = fname;
        }

    }
    return maximum;

}
console.log(megaFriend(friend));
