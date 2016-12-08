'use strict';

var hours = ['6:00am ','7:00am ','8:00am ','9:00am ','10:00am ','11:00am ','12:00pm ','1:00pm ','2:00pm ','3:00pm ','4:00pm ','5:00pm ','6:00pm ','7:00pm '];

var storeName = [];
var cookieEaHrTot = [];//calculate total cookie sold per hour of all stores
var cookieTOT = 0; //calcuate grand total
var storeForm = document.getElementById('inputForm');
var locationTbl = document.getElementById('Location');
var deleteButton = document.getElementById('delete_button');

function Store(locationName,minCustperDay,maxCustperDay,avgCookieEaCust){
  this.locationName = locationName;
  this.minCustperDay = minCustperDay;
  this.maxCustperDay = maxCustperDay;
  this.avgCookieEaCust = avgCookieEaCust;
  this.randomCustPerHour = [];
  this.cookieSoldEaHr = [];
  this.cookieTot = 0;

  this.calcRandomCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustperDay - this.minCustperDay + 1)) + this.minCustperDay);
    }
  };

  this.calcCookieSoldEaHr = function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.cookieSoldEaHr.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookieEaCust));
      this.cookieTot += this.cookieSoldEaHr[i];
    }
  };

  this.calcCookieSoldEaHr();
  this.cookieSoldEaHr.push(this.cookieTot);
  storeName.push(this);
} //end of store object

// This function is the event handler for input form
function handleStoreInput(event) {
  console.log('handleStoreInput event')
  event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event

  var a = event.target.store_name.value;
  var b = event.target.min_customer.value;
  var c = event.target.max_customer.value;
  var d = event.target.avg_cookieSold.value;

  if (!a || !b || !c || !d) {
    return alert('Fields cannot be empty!');
  }

  if (b < 0|| c < 0 || d < 0) {
    event.target.store_name.value = null;
    event.target.min_customer.value = null;
    event.target.max_customer.value = null;
    event.target.avg_cookieSold.value = null;
    alert('Fields cannot be less than 0!');
    return;
  }

  var newStore = new Store(a, b, c, d);

  event.target.store_name.value = null;
  event.target.min_customer.value = null;
  event.target.max_customer.value = null;
  event.target.avg_cookieSold.value = null;

createTable();

};

function handleStoreRemove(event) {
  event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event
  alert('work in progress');

};//close handleStoreInput event

function createTblHeader() {

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);

  locationTbl.appendChild(trEl);

} //close createTblHeader

function createTblFooter() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total ';
  trEl.appendChild(tdEl);

  for (var i = 0; i < cookieEaHrTot.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = cookieEaHrTot[i];
    trEl.appendChild(tdEl);
  }
  locationTbl.appendChild(trEl);
} //close createTblFooter

function createTable() {

  //cal hourly cookie total of all stores
  cookieEaHrTot = [];
  for (var i = 0; i<hours.length;i++) {
    var total = 0;
    for (var j = 0; j<storeName.length;j++) {
      total += storeName[j].cookieSoldEaHr[i];
    }
    cookieEaHrTot.push(total);
  }

  //cal total of cookie total of all stores
  for (var n = 0; n<storeName.length;n++) {
    cookieTOT += storeName[n].cookieTot;
  }
  // cookieEaHrTot.unshift('Total');
  cookieEaHrTot.push(cookieTOT);

  // clear table for each render draw
  while (locationTbl.firstChild) {
    locationTbl.removeChild(locationTbl.firstChild);
  }

  var locationCap = document.getElementById('Location').createCaption();
  locationCap.innerHTML = "<b>Table 1 Cookies Needed by Location Each Day</b>";
  var trEl = document.createElement('tr');
  locationTbl.appendChild(trEl);

  createTblHeader();

  for (var j = 0; j < storeName.length; j++) {
    var trElStore = document.createElement('tr');
    locationTbl.appendChild(trElStore);
    var tdEl = document.createElement('td');
    tdEl.textContent = storeName[j].locationName;
    trElStore.appendChild(tdEl);

    for (var k = 0; k < hours.length + 1; k++) {
      var tdElHr = document.createElement('td');
      tdElHr.textContent = storeName[j].cookieSoldEaHr[k];
      trElStore.appendChild(tdElHr);
    } //end array_i
  } //end array_j

  createTblFooter();

} //end of createTable object

///////////////////////////////////////////////////////////////////////

new Store('1st and Pike',23,65,6.3);
new Store('SeaTac Airport',3,24,1.2);
new Store('Seattle Center',11,38,3.7);
new Store('Capital Hill',20,38,2.3);
new Store('Alki',2,16,4.6);

createTable();

storeForm.addEventListener('submit',handleStoreInput);
deleteButton.addEventListener('click',handleStoreRemove);
