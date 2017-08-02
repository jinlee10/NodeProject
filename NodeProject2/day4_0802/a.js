/**
 * 
 */


const http = require('http');

const hostname = '192.168.205.137';
const port = 3000;
var num = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // 응답코드! response지?
  num++;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('num', num);
  res.end('Hello World num: ' + num + '\n'); //보내고 끝내버리기~
  var cnt = server.getMaxListeners();
  console.log('cnt: ' + cnt);
  if(num > 9){
	  console.log('hi1');
	  server.close();
	  console.log('hi2');
  }
});

server.on('close', function(){
	console.log('server closing');
	process.exit();
});

server.listen(port, hostname, () => {	//accept()같은거
  console.log(`Server running at http://${hostname}:${port}/`);
  // `${}` 표현식으루 :쌍으로 출력
});//server on이면 정상적으로 켜졌다고 ok sign
// hostname 생략하면 ...
// port는 서버단에서 랜카드 여러개일때....