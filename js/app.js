'use strict';

var workhours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm ', '8 pm '];
var Seattle = {
    location: 'Seattle',
    minnumcusph: 23,
    maxnumcusph: 65,
    avgcookiepcus: 6.3,
    cusperhour: [],
    numcookiepurch: [],
    calcusperhour: function () {
        for (var i = 0; i < 15; i++) {
            var randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
            this.cusperhour.push(randomcusnum);
        } console.log(this.cusperhour)
        return this.cusperhour;
    },
    calcnumcookiepurch: function () {
        for (var i = 0; i < 15; i++) {
            var cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
            this.numcookiepurch.push(cookiespurchased);

        } console.log(this.numcookiepurch)
        return this.numcookiepurch;
    },
    render: function () {
        var articleseattle = document.getElementById('seattle');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var i = 0; i < 15; i++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = workhours[i] + this.numcookiepurch[i] + ' Cookies';
        }
    }
}
Seattle.calcusperhour();
Seattle.calcnumcookiepurch();
Seattle.render();

var Tokyo = {
    location: 'Tokyo',
    minnumcusph: 3,
    maxnumcusph: 24,
    avgcookiepcus: 1.2,
    cusperhour: [],
    numcookiepurch: [],
    calcusperhour: function () {
        for (var i = 0; i < 15; i++) {
            var randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
            this.cusperhour.push(randomcusnum);
        } console.log(this.cusperhour)
        return this.cusperhour;
    },
    calcnumcookiepurch: function () {
        for (var i = 0; i < 15; i++) {
            var cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
            this.numcookiepurch.push(cookiespurchased);

        } console.log(this.numcookiepurch)
        return this.numcookiepurch;
    },
    render: function () {
        var articleseattle = document.getElementById('tokyo');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var i = 0; i < 15; i++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = workhours[i] + this.numcookiepurch[i] + ' Cookies';
        }
    }
}
Tokyo.calcusperhour();
Tokyo.calcnumcookiepurch();
Tokyo.render();

var Dubai = {
    location: 'Dubai',
    minnumcusph: 11,
    maxnumcusph: 38,
    avgcookiepcus: 3.7,
    cusperhour: [],
    numcookiepurch: [],
    calcusperhour: function () {
        for (var i = 0; i < 15; i++) {
            var randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
            this.cusperhour.push(randomcusnum);
        } console.log(this.cusperhour)
        return this.cusperhour;
    },
    calcnumcookiepurch: function () {
        for (var i = 0; i < 15; i++) {
            var cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
            this.numcookiepurch.push(cookiespurchased);

        } console.log(this.numcookiepurch)
        return this.numcookiepurch;
    },
    render: function () {
        var articleseattle = document.getElementById('dubai');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var i = 0; i < 15; i++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = workhours[i] + this.numcookiepurch[i] + ' Cookies';
        }
    }
}
Dubai.calcusperhour();
Dubai.calcnumcookiepurch();
Dubai.render();

var Paris = {
    location: 'Paris',
    minnumcusph: 20,
    maxnumcusph: 38,
    avgcookiepcus: 2.3,
    cusperhour: [],
    numcookiepurch: [],
    calcusperhour: function () {
        for (var i = 0; i < 15; i++) {
            var randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
            this.cusperhour.push(randomcusnum);
        } console.log(this.cusperhour)
        return this.cusperhour;
    },
    calcnumcookiepurch: function () {
        for (var i = 0; i < 15; i++) {
            var cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
            this.numcookiepurch.push(cookiespurchased);

        } console.log(this.numcookiepurch)
        return this.numcookiepurch;
    },
    render: function () {
        var articleseattle = document.getElementById('paris');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var i = 0; i < 15; i++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = workhours[i] + this.numcookiepurch[i] + ' Cookies';
        }
    }
}
Paris.calcusperhour();
Paris.calcnumcookiepurch();
Paris.render();

var Lima = {
    location: 'Lima',
    minnumcusph: 2,
    maxnumcusph: 16,
    avgcookiepcus: 4.6,
    cusperhour: [],
    numcookiepurch: [],
    calcusperhour: function () {
        for (var i = 0; i < 15; i++) {
            var randomcusnum = Math.floor(Math.random() * (this.maxnumcusph - this.minnumcusph + 1) + this.minnumcusph);
            this.cusperhour.push(randomcusnum);
        } console.log(this.cusperhour)
        return this.cusperhour;
    },
    calcnumcookiepurch: function () {
        for (var i = 0; i < 15; i++) {
            var cookiespurchased = Math.floor(this.avgcookiepcus * this.cusperhour[i]);
            this.numcookiepurch.push(cookiespurchased);

        } console.log(this.numcookiepurch)
        return this.numcookiepurch;
    },
    render: function () {
        var articleseattle = document.getElementById('lima');
        var heading = document.createElement('h2');
        var unorderlist = document.createElement('ul');
        articleseattle.appendChild(unorderlist);
        unorderlist.appendChild(heading);
        heading.textContent = this.location
        for (var i = 0; i < 15; i++) {
            var list = document.createElement('li');
            unorderlist.appendChild(list);
            list.textContent = workhours[i] + this.numcookiepurch[i] + ' Cookies';
        }
    }
}
Lima.calcusperhour();
Lima.calcnumcookiepurch();
Lima.render();