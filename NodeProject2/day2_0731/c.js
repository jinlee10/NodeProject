/**
 * 
 */

var _ = require('underscore');

var arr = [2,6,4,7,2,3,9,3];



//nim install 패키지명: -g
var first = _.first(arr);	//배열의 이름

console.log('first: ' + first);

//var last = arr[arr.length - 1];
var last = _.last(arr);

console.log('last: ' + last);

