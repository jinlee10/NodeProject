/**
 * 
 */


// 4교시 서버열기

const http = require('http');
const fs = require('fs');
const port = 3000;//변하지 않으니 const야

//http를이용하여 서버를 뽑아내자
const server = http.createServer();


//서버를 시작하여 3000번 포트에서 대기시킴
server.listen(port, () => {//정상실행시 실행
	console.log('서버  스ㅡㅡ타ㅏㅏ트ㅡㅡㅡ');
});

// 클라 연결이벤트처리
server.on('connection', (socket)=>{
	var addr = socket.address();	//주소정보
	console.log('접속아이피: ' + addr.address);
	// ::ffff: 얘도 잘라버려야한다(split인지 뭔지로 잘라!
});

var num = 0;	//동적임을 보여주기위한것

// 클라가 request했을떄
server.on('request', function(req, res){
	num++;
	console.log('method: ' + req.method);//확인용
	console.log('url: ' + req.url);//확인용
	console.log('ip: ' + req.socket.address().address);//확인용
//	res.end('meh - rong');
	res.writeHead(200, {'Content-type':'text/html;charset=utf-8', 'a':'Tacademy'});
	
	
	//b.html을 읽어와서 보낼것이다
	fs.readFile('b.html', 'utf8', (err, data) => {//비동기라 함수등록
		if(err){
			//에러있을경우 작업
			res.write('서버가 바빠! 다시해!');//열루
		}else{
			res.write(data);
		}
		res.end();
		
	});
	
//	res.write('<html>');
//	res.write('<head>');
//	res.write('</head>');
//	res.write('<body>');
//	res.write('numm: ' + num);
//	res.write('</body>');
//	res.write('</html>');
//	res.end();	//비동긴데 바로하면 닫혀버린다 그렇다면 우에서 닫아주면된다
	
	
});

//같은곳에서 다시접속할때 커넥션 없고 리퀘스트만하네~
server.on('close', function(){
	console.log('close');
});




