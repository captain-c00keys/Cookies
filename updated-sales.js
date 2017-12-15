'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

var pikeStore = {
  name: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaTacStore = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('seatac');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaCenStore = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('sea-cen');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var capHillStore = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('capitol hill');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var alkiStore = {
  name: 'Aliki Store',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  totalDailySales: 0,
  custPerHourFunc: function(){
    for(var i = 0; i < hours.length; i++){
      this.custPerHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  cookiesPerHourFunc: function(){
    this.custPerHourFunc();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  }, //help from Sam's demo
  render: function(){
    this.cookiesPerHourFunc();
    var ulEl = document.getElementById('alki');
    for(var i = 0; i < hours.length; i++){

      var liEl = document.createElement('li');

      liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';

      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
};
