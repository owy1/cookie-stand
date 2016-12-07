'use strict';

var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '];

var Alki = {
  locationName: 'Alki',
  minCustperDay : 2,
  maxCustperDay : 16,
  avgCookieEaCust : 4.6,
  randomCustPerHour: [],
  cookieSoldEaHr: [],
  cookieTot: 0,

  calcRandomCustPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustperDay-this.minCustperDay+1)) + this.minCustperDay);
    }
  },

  calcCookieSoldEaHr: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookieSoldEaHr.push(Math.round(this.randomCustPerHour[i] * this.avgCookieEaCust));
      this.cookieTot += this.cookieSoldEaHr[i];
    }
  },

  render: function() {
    var shopList = document.getElementById('Alki');

    for (var i = 0; i<hours.length;i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i]+this.cookieSoldEaHr[i]+' cookies';
      shopList.appendChild(liEl);
    }

    var totli = document.createElement('li');
    totli.textContent = 'Total: '+this.cookieTot+' cookies';
    shopList.appendChild(totli);
  }
};
Alki.calcRandomCustPerHour();
Alki.calcCookieSoldEaHr();
Alki.render();

var SeaTacAir = {
  locationName: 'SeaTac Airport',
  minCustperDay : 3,
  maxCustperDay : 24,
  avgCookieEaCust : 1.2,
  randomCustPerHour: [],
  cookieSoldEaHr: [],
  cookieTot: 0,

  calcRandomCustPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustperDay-this.minCustperDay+1)) + this.minCustperDay);
    }

  },

  calcCookieSoldEaHr: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookieSoldEaHr.push(Math.round(this.randomCustPerHour[i] * this.avgCookieEaCust));
      this.cookieTot += this.cookieSoldEaHr[i];
    }
  },
  render: function() {
    var shopList = document.getElementById('SeaTac Airport');

    for (var i = 0; i<hours.length;i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i]+this.cookieSoldEaHr[i]+' cookies';
      shopList.appendChild(liEl);
    }

    var totli = document.createElement('li');
    totli.textContent = 'Total: '+this.cookieTot+' cookies';
    shopList.appendChild(totli);
  }
};
SeaTacAir.calcRandomCustPerHour();
SeaTacAir.calcCookieSoldEaHr();
SeaTacAir.render();

var FirstPike = {
  locationName: '1st and Pike',
  minCustperDay : 23,
  maxCustperDay : 65,
  avgCookieEaCust : 6.3,
  randomCustPerHour: [],
  cookieSoldEaHr: [],
  cookieTot: 0,

  calcRandomCustPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustperDay-this.minCustperDay+1)) + this.minCustperDay);
    }
  },

  calcCookieSoldEaHr: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookieSoldEaHr.push(Math.round(this.randomCustPerHour[i] * this.avgCookieEaCust));
      this.cookieTot += this.cookieSoldEaHr[i];
    }
  },

  render: function() {
    var shopList = document.getElementById('1st and Pike');

    for (var i = 0; i<hours.length;i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i]+this.cookieSoldEaHr[i]+' cookies';
      shopList.appendChild(liEl);
    }

    var totli = document.createElement('li');
    totli.textContent = 'Total: '+this.cookieTot+' cookies';
    shopList.appendChild(totli);
  }
};
FirstPike.calcRandomCustPerHour();
FirstPike.calcCookieSoldEaHr();
FirstPike.render();

var SeaCenter = {
  locationName: 'Seattle Center',
  minCustperDay : 11,
  maxCustperDay : 38,
  avgCookieEaCust : 3.7,
  randomCustPerHour: [],
  cookieSoldEaHr: [],
  cookieTot: 0,

  calcRandomCustPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustperDay-this.minCustperDay+1)) + this.minCustperDay);
    }
  },

  calcCookieSoldEaHr: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookieSoldEaHr.push(Math.round(this.randomCustPerHour[i] * this.avgCookieEaCust));
      this.cookieTot += this.cookieSoldEaHr[i];
    }
  },

  render: function() {
    var shopList = document.getElementById('Seattle Center');

    for (var i = 0; i<hours.length;i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i]+this.cookieSoldEaHr[i]+' cookies';
      shopList.appendChild(liEl);
    }

    var totli = document.createElement('li');
    totli.textContent = 'Total: '+this.cookieTot+' cookies';
    shopList.appendChild(totli);
  }
};
SeaCenter.calcRandomCustPerHour();
SeaCenter.calcCookieSoldEaHr();
SeaCenter.render();

var CapHill = {
  locationName: 'Capital Hill',
  minCustperDay : 20,
  maxCustperDay : 38,
  avgCookieEaCust : 2.3,
  randomCustPerHour: [],
  cookieSoldEaHr: [],
  cookieTot: 0,

  calcRandomCustPerHour: function() {
    for (var j=0; j<hours.length; j++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustperDay-this.minCustperDay+1)) + this.minCustperDay);
    }
  },

  calcCookieSoldEaHr: function() {
    for (var i=0; i<hours.length; i++) {
      this.cookieSoldEaHr.push(Math.round(this.randomCustPerHour[i] * this.avgCookieEaCust));
      this.cookieTot += this.cookieSoldEaHr[i];
    }
  },

  render: function() {
    var shopList = document.getElementById('Capital Hill');

    for (var i = 0; i<hours.length;i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i]+this.cookieSoldEaHr[i]+' cookies';
      shopList.appendChild(liEl);
    }

    var totli = document.createElement('li');
    totli.textContent = 'Total: '+this.cookieTot+' cookies';
    shopList.appendChild(totli);
  }
};
CapHill.calcRandomCustPerHour();
CapHill.calcCookieSoldEaHr();
CapHill.render();
