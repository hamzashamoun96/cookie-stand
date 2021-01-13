'use strict';

var workhours = ['6:00 am ', '7:00 am ', '8:00 am ', '9:00 am ', '10:00 am ', '11:00 am ', '12:00 pm ', '1:00 pm ', '2:00 pm ', '3:00 pm ', '4:00 pm ', '5:00 pm ', '6:00 pm ', '7:00 pm '];

// Create table , Create tr and Create th blank.

var Main = document.getElementById('main');
var tabletag = document.createElement('table');
tabletag.setAttribute("id","table1")  
var trtag = document.createElement('tr');        
var thtag = document.createElement('th');      
var tdtag;
Main.appendChild(tabletag);
tabletag.appendChild(trtag);
trtag.appendChild(thtag);

// Creat th for workhours.

for (var x = 0; x < workhours.length; x++) {
    thtag = document.createElement('th');     
    trtag.appendChild(thtag);
    thtag.textContent = workhours[x];
}

// Creat th for daily location total.

thtag = document.createElement('th');        
trtag.appendChild(thtag);
thtag.textContent = ' Daily Location Total';

// Creating a constructor.

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

// Prototype Function To Calculate Custumer Per Hour.

Branches.prototype.calcusperhour = function () {
    var randomcusnum;
    for (var i = 0; i < workhours.length; i++) {
        randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
        this.cusperhour.push(randomcusnum);
    }
}

// Prototype Function To Calculate Cookies Purshaced.

Branches.prototype.calcnumcookiepurch = function () {
    var cookiespurchased;
    for (var i = 0; i < workhours.length; i++) {
        cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
        this.numcookiepurch.push(cookiespurchased);
        this.totalcookies = this.totalcookies + this.numcookiepurch[i];
    }
}

// Prototype Function To Render The Results In A Table.

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

// Render And Calculate The Total Per Hour & Total Of Totals.

function TotalAndTolalOfTotalsRow(){
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
    }
    
// Ceating New Objects.

var Seattle = new Branches('Seattle', 23, 65, 6.3)
var Tokyo = new Branches('Tokyo', 3, 24, 1.2)
var Dubai = new Branches('Dubai', 11, 38, 3.7)
var Paris = new Branches('Paris', 20, 38, 2.3)
var Lima = new Branches('Lima', 2, 16, 4.6)

// Calling Objects Methods.
 
for(var i = 0;i<StoreArray.length;i++){
    StoreArray[i].calcusperhour();
    StoreArray[i].calcnumcookiepurch();
    StoreArray[i].TabelResults();
}
TotalAndTolalOfTotalsRow();


// User Input A New Object.

var forminput = document.getElementById('forminput');
forminput.addEventListener('submit', newBranch);

function newBranch(event){
    
    event.preventDefault();
    var location = event.target.location.value;
    var minimumcustomer = event.target.minimum.value;
    var maximumcustomer = event.target.maximum.value;
    var averagecustomer = event.target.averagecookie.value;
    var newlocation = new Branches (location,minimumcustomer,maximumcustomer,averagecustomer);
    newlocation.calcusperhour();
    newlocation.calcnumcookiepurch();
    newlocation.TabelResults();
    document.getElementById('table1').deleteRow(StoreArray.length);
    TotalAndTolalOfTotalsRow();
}