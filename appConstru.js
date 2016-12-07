'use strict';

var hours = ['','6:00am ','7:00am ','8:00am ','9:00am ','10:00am ','11:00am ','12:00pm ','1:00pm ','2:00pm ','3:00pm ','4:00pm ','5:00pm ','6:00pm ','7:00pm '];

var storeName = [];

function Store(locationName,minCustperDay,maxCustperDay,avgCookieEaCust){
  this.locationName = locationName;
  this.minCustperDay = minCustperDay;
  this.maxCustperDay = maxCustperDay;
  this.avgCookieEaCust = avgCookieEaCust;
  this.randomCustPerHour = [];
  this.cookieSoldEaHr = [];
  this.cookieTot = 0;

  this.calcRandomCustPerHour = function() {
    for (var i=0; i<hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustperDay-this.minCustperDay+1)) + this.minCustperDay);
    }
  };

  this.calcCookieSoldEaHr = function() {
    this.calcRandomCustPerHour();
    for (var i=0; i<hours.length; i++) {
      this.cookieSoldEaHr.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookieEaCust));
      this.cookieTot += this.cookieSoldEaHr[i];
    }
  };

  // this.render = function() {
  //   this.calcCookieSoldEaHr();
  //   var shopList = document.getElementById(this.locationName);
  //   for (var i = 0; i<hours.length;i++) {
  //     var liEl = document.createElement('li');
  //     liEl.textContent = hours[i]+this.cookieSoldEaHr[i]+' cookies';
  //     shopList.appendChild(liEl);
  //   }
  //
  //   var totli = document.createElement('li');
  //   totli.textContent = 'Total: '+this.cookieTot+' cookies';
  //   shopList.appendChild(totli);
  // }
  this.calcCookieSoldEaHr();
  storeName.push(this);
} //end of store objecct

new Store('1st and Pike',23,65,6.3);
new Store('SeaTac Airport',3,24,1.2);
new Store('Seattle Center',11,38,3.7);
new Store('Capital Hill',20,38,2.3);
new Store('Alki',2,16,4.6);

var cookieEaHrTot = [];
for (var i = 0; i<storeName.length;i++) {
  for (var j = 0; j<storeName.length;j++) {
    cookieEaHrTot.push(storeName[j].cookieSoldEaHr[i]);
    console.log(cookieEaHrTot);
  }
}

function createTable() {
  var locationTbl = document.getElementById('Location');

  var trEl = document.createElement('tr');
  locationTbl.appendChild(trEl);
  for (var i = 0; i<hours.length;i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  for (var j = 0; j<storeName.length;j++) {
    var trElStore = document.createElement('tr');
    locationTbl.appendChild(trElStore);
    var tdEl = document.createElement('td');
    tdEl.textContent = storeName[j].locationName;
    trElStore.appendChild(tdEl);

    for (var k = 1; k<hours.length;k++) {
      var tdElHr = document.createElement('td');
      tdElHr.textContent = storeName[j].cookieSoldEaHr[k];
      trElStore.appendChild(tdElHr);
    } //end array_i
  } //end array_j

  // var trEl = document.createElement('tr');
  // for (var i = 0; i<hours.length;i++) {
  // thEl.textContent = totEachHr[i];
  // thEl.appendChild(thEl);
  // }

} //end of createTable object

createTable();
