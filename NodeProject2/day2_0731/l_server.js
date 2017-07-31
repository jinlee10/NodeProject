/**
 * 
 */

// 7교시

const net = require('net');

var server = net.createServer(function(socket){ //소켓이 필요해
	console.log(socket.remoteAddress);//소켓이 가진 remoteAddress
	
	socket.on('data', function(data){//rederThread라고바도된다
		console.log('read data: ' + data);
		socket.write('echo : ' + data);
//		socket.write();
	});	
	socket.on('end', function(){
		
		//end가되면 callback함수를 실행하는것을 등록
		console.log('connection closed');
	});
	
});

//상대방의 접속을 기다린다
server.listen(30033);//인자로 포트를준다
console.log('서버 스타트');





























