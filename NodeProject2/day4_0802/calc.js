/**
 * http://usejsdoc.org/
 */

const express = require('express');
const path = require('path');
const app = express();

//static files
var pth = path.join('..', 'public');
app.use(express.static(path.join(__dirname, pth)));

app.get('/calc', function (req, res) {
	//http통신에서 데이터는 다
	//다 문자열로오기때문에
	//처리를해줘야한다
	
	var ln = req.query.ln;
	var rn = req.query.rn;
	var op = req.query.op;
	var val = 0;
	val = eval(ln + op + rn);
	
	res.send(200, val);//protocol'n all
});



app.listen(3000, function () {
  console.log('Whale-come!');
});