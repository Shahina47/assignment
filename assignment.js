kilometerToMeter


function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var Meter = kilometerToMeter(12);










budgetCalculator



function budgetCalculator(clock, mobile, laptop){

    var totprice = clock * 50 + mobile * 100 + laptop * 500;
   return totprice;
}
var budget = budgetCalculator(6, 20, 4);









hotelCost



var days = 43;
var cost = 0;
if (days <= 10) {
    cost = days * 100;
}
else if(days <= 20) {
    var first10days = 10 * 100;
    var remaining = days - 10;
    var second10days = remaining * 80;
    cost = first10days + second10days;
}
else {
    var first10days = 10 * 100;
    var second10days = 10 * 80;
    var remaining = days - 20;
    var third10days = remaining * 50;
    cost = first10days + second10days + third10days;
}









megaFriend



function megaFriend(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
