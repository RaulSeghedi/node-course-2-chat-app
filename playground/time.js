var moment = require('moment');

// Jan 1st 1970 00:00:10 am

// var date = new Date();
// var month = ['Jan', 'Feb'];
// console.log(date.getMonth());

// var date = moment();
// date.add(0, 'year').subtract(0, 'months');
// console.log(date.format('MMM Do, YYYY'));
//
// // 10:35 am
// var date2 = moment();
// date2.add(0, 'year').subtract(0, 'months');
// console.log(date2.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));