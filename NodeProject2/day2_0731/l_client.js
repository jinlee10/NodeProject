/**
 * 
 */

// 7교시

const net = require('net');

var ip = '192.168.205.122';
var port = 30033;

var client = new net.Socket();

client.connect(port, ip, function(){
	console.log('successfully connected');
	client.write('하이');
});

client.on('data', function(data){
	//읽었을때 data가 진짜 오른쪽 으로 간다
	console.log('receive data: ' + data);
//	client.destroy();
});

client.on('end', function(){
	//끝나고나면 얘가실행됩니다.
	console.log('connection closed');
});

























