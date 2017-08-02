/**
 * 
 */

// Express사용예제 8.2

var express = require('express');
var app = express();

const path = require('path');

/// 나ㅏㅏ 의 기 준ㄴㄴㄴㄴ
app.use(express.static(path.join(__dirname, '/public'))); //이걸 많이쓸것
//app.use('/tacademy', express.static(path.join(__dirname, '/public')));
 

// /로 들어오면 요 함수를 실행한다: 라--우--팅(주소와 함 수기능을 맵핑)
app.get('/', function (req, res) {
  res.send('Hello World');
});

//get: client접속때마다호출되는놈
app.get('/aaa', function (req, res) {
  res.send('Hello Tacademy aaa');
});

 
//form에대한 처리
app.get('/form', function (req, res) {
	var name = req.query.name;	//입력값얻어온다
	var age = req.query.age;	//입력값얻어온다
	var mail = req.query.mail;	//입력값얻어온다
	var size = req.query.size;
	var tel = req.query.tel.join('-'); //쩌...쩐다!
	
	var output = '이름: ' + name + ', 나이: ' + age + '<br/>';
	output += output = '메일수신..' + mail + '<br/>';
	output += output = 'size: ' + size + '<br/>';
	output += output = 'tel: ' + tel + '<br>';
	
	res.send(output);
	//send는 지가 보내고 close(end)까지 한다
});

//login.html하구싶다!(횐-갑)
//만들순있겠지 ㅇㅇ

//웹을 처리한다! ==> 요청과 응답

app.get('/signup', function(req, res){ //일루들어오면 처리할것이야
	res.send('<html></html>'); //이렇게 만들어서 쏠수도 있긴 하겠지
	//이것보단 따로만들어져있는게좋은거지?
	//그래서 아까 파일 읽어서 한거엿자너
	//what if html이 100개?
	//관리도 불편하고...
	//있는 그대로 보내주고파!
	//정적인파일들을 읽어서 걍 그거 보내줄게~
	//public에 넣은놈들은 여기서 또만들어줄필요없음이야!
});








app.post('/aaa', function (req, res) {
	res.send('Hello Tacademy bbb');
});

//Express에선 app. 뒤에오는게 메소드이름이다! 클라접속하는!
app.put('/user', function (req, res) {
	  res.send('Got a PUT request at /user');
});
// /user로 오면 요걸 실행합니다!




app.listen(3000);