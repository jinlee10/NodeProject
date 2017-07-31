/**
 * 
 */

const fs = require('fs');
const readline = require('readline');
var fname = 'i.txt';

var fInput = fs.createReadStream(fname);

const rl = readline.createInterface(fInput, process.stdout);

rl.on('line', function(){
	var tokens = data.split(' ');
	var name = tokens
	console.log(name);
	console.log(data);
});

rl.on('close', function(){
	console.log('read end')
});

//readLine();





























