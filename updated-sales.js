'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];

var storeTable = document.getElementById('store-sales');

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

function Store (name, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.name = name,
  this.minCustPerHour = minCustPerHour,
  this.maxCustPerHour = maxCustPerHour,
  this.avgCookiesPerCust = avgCookiesPerCust,
  this.custPerHour = [],
  this.cookiesPerHour = [],
  this.totalDailySales = 0,
  stores.push(this);
};

Store.prototype.custPerHourFunc = function() {
  for (var i = 0; i < hours.length; i++) {
    this.custPerHour.push(random(this.minCustPerHour, this.maxCustPerHour));
  }
};

Store.prototype.cookiesPerHourFunc = function() {
  this.custPerHourFunc();

  for (var i = 0; i < hours.length; i++) {
    var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};

Store.prototype.render = function(){
  this.cookiesPerHourFunc();
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};

function chartData(event) {
  event.preventDefault();

  var name = event.target.store.value;
  var minCustPerHour = parseInt(event.target.minCustPerHour.value);
  var maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
  var avgCookiesPerCust = parseInt(event.target.avgCookiesPerCust.value);

  stores.push(new Store(name, minCustPerHour, maxCustPerHour, avgCookiesPerCust));
  unRender();
  renderHeaderRow();
  // renderStoreRows();
  renderFormRow();
  // renderFooterRow();
  form.reset();
}

function renderFormRow() {
  for(var i = 0; i < stores.length; i++){
    stores[i].render();
  };
}

function renderHeaderRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var thEl = document.createElement('th');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };
  storeTable.appendChild(trEl);
}

function renderStoreRows(){
  for(var i = 0; i < stores.length; i++){
    stores[i].render();
  };
}

form.addEventListener('submit', chartData);
