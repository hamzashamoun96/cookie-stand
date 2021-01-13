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

var StoreArray = [];
function Branches(location, minnumcusph, maxnumcusph, avgcookiepcus) {
    this.location = location;
    this.minnumcusph = minnumcusph;
    this.maxnumcusph = maxnumcusph;
    this.avgcookiepcus = avgcookiepcus;
    this.totalcookies = 0;
    this.cusperhour = [];
    this.numcookiepurch = [];
    StoreArray.push(this);
}
Branches.prototype.calcusperhour = function () {
    var randomcusnum;
    for (var i = 0; i < workhours.length; i++) {
        randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
        this.cusperhour.push(randomcusnum);
    }
}
Branches.prototype.calcnumcookiepurch = function () {
    var cookiespurchased;
    for (var i = 0; i < workhours.length; i++) {
        cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
        this.numcookiepurch.push(cookiespurchased);
        this.totalcookies = this.totalcookies + this.numcookiepurch[i];
    }
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
var Tokyo = new Branches('Tokyo', 3, 24, 1.2)
var Dubai = new Branches('Dubai', 11, 38, 3.7)
var Paris = new Branches('Paris', 20, 38, 2.3)
var Lima = new Branches('Lima', 2, 16, 4.6)

for(var i = 0;i<StoreArray.length;i++){
    StoreArray[i].calcusperhour();
    StoreArray[i].calcnumcookiepurch();
    StoreArray[i].TabelResults();
}

console.log('Arrayofobject', StoreArray);
trtag = document.createElement('tr');
tabletag.appendChild(trtag);
tdtag = document.createElement('td');
trtag.appendChild(tdtag);
tdtag.textContent = 'Total';

var sumcookieperhour;
var Totaloftotals = 0;
for (var y = 0; y < workhours.length; y++) {
    sumcookieperhour = 0;
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