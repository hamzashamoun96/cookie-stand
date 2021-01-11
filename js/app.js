'use strict';

var workhours = ['6:00 am ', '7:00 am ', '8:00 am ', '9:00 am ', '10:00 am ', '11:00 am ', '12:00 pm ', '1:00 pm ', '2:00 pm ', '3:00 pm ', '4:00 pm ', '5:00 pm ', '6:00 pm ', '7:00 pm '];
var Main = document.getElementById('main');
var tabletag = document.createElement('table');  // Create table.
var trtag = document.createElement('tr');        // Create tr.
var thtag = document.createElement('th');        // Create tr blank.
var tdtag;
Main.appendChild(tabletag);
tabletag.appendChild(trtag);
trtag.appendChild(thtag);

for (var x = 0; x < workhours.length; x++) {
    thtag = document.createElement('th');     // Creat th for workhours.
    trtag.appendChild(thtag);
    thtag.textContent = workhours[x];
}
thtag = document.createElement('th');         // Creat th for daily location total.
trtag.appendChild(thtag);
thtag.textContent = ' Daily Location Total';

function Branches(location, minnumcusph, maxnumcusph, avgcookiepcus) {
    this.location = location;
    this.minnumcusph = minnumcusph;
    this.maxnumcusph = maxnumcusph;
    this.avgcookiepcus = avgcookiepcus;
    this.totalcookies = 0;
    this.cusperhour = [];
    this.numcookiepurch = [];
}
Branches.prototype.calcusperhour = function () {
    var randomcusnum;
    for (var i = 0; i < workhours.length; i++) {
        randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
        this.cusperhour.push(randomcusnum);
    } console.log(this.cusperhour)
    return this.cusperhour;
}
Branches.prototype.calcnumcookiepurch = function () {
    var cookiespurchased;
    for (var i = 0; i < workhours.length; i++) {
        cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
        this.numcookiepurch.push(cookiespurchased);
        this.totalcookies = this.totalcookies + this.numcookiepurch[i];
    } console.log(this.numcookiepurch)
    console.log(this.totalcookies);
    return this.numcookiepurch;
}
Branches.prototype.TabelResults = function () {
    var tdtag;
    trtag = document.createElement('tr');
    tabletag.appendChild(trtag);
    tdtag = document.createElement('td');
    trtag.appendChild(tdtag);
    tdtag.textContent = this.location;
    for (var j = 0; j < workhours.length; j++) {
        tdtag = document.createElement('td');
        trtag.appendChild(tdtag);
        tdtag.textContent = this.numcookiepurch[j];
    }
    tdtag = document.createElement('td');
    trtag.appendChild(tdtag);
    tdtag.textContent = this.totalcookies;
}

var Seattle = new Branches('Seattle', 23, 65, 6.3)
Seattle.calcusperhour();
Seattle.calcnumcookiepurch();
Seattle.TabelResults();

var Tokyo = new Branches('Tokyo', 3, 24, 1.2)
Tokyo.calcusperhour();
Tokyo.calcnumcookiepurch();
Tokyo.TabelResults();

var Dubai = new Branches('Dubai', 11, 38, 3.7)
Dubai.calcusperhour();
Dubai.calcnumcookiepurch();
Dubai.TabelResults();

var Paris = new Branches('Paris', 20, 38, 2.3)
Paris.calcusperhour();
Paris.calcnumcookiepurch();
Paris.TabelResults();

var Lima = new Branches('Lima', 2, 16, 4.6)
Lima.calcusperhour();
Lima.calcnumcookiepurch();
Lima.TabelResults();

var StoreArray = [Seattle, Tokyo, Dubai, Paris, Lima];
console.log('Arrayofobject', StoreArray);
trtag = document.createElement('tr');
tabletag.appendChild(trtag);
tdtag = document.createElement('td');
trtag.appendChild(tdtag);
tdtag.textContent = 'Total';

var Totaloftotals = 0;
for (var y = 0; y < workhours.length; y++) {
    var sumcookieperhour = 0;
    for (var z = 0; z < StoreArray.length; z++) {
        sumcookieperhour = StoreArray[z].numcookiepurch[y] + sumcookieperhour
    }
    Totaloftotals = Totaloftotals + sumcookieperhour;
    tdtag = document.createElement('td');
    trtag.appendChild(tdtag);
    tdtag.textContent = sumcookieperhour;
}
tdtag = document.createElement('td');
trtag.appendChild(tdtag);
tdtag.textContent = Totaloftotals;