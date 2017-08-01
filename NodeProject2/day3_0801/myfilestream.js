/**
 * 		2회차dd
 */

const fs = require('fs');

const path = require('path');	//얘도 불러와야됨

//API를 보고 (인자 등) 개발을 할것!

var fname = 'package.json';	//fileName
var dirname = '..'; //어디어디경로 (..은 상위폴더)

var dirFname = path.join(dirname, fname);	//경로 붙여줌(윈도우/리눅스의 /\ 경로표시 차이떄문에 굳이 조인을 쓰는것이다! concat이랑은 다르고 \랑 / 경로표시 차이떄문에그런거!!)
var data = 'basic';

fs.readFile(dirFname, 'utf8', function(err, data) {
	if(err){
		console.log('ㅉㅉ에러가 있다!');
		return;
	}
	this.data = data;
	console.log('함수 안쪽(여기서 작업해야함): ' + data);
	console.log('함수 안쪽 this' + this.data);
	console.log('java는 뭐하고나서 아래서 작업했는데\n' + 
			'여기선 뭐하나 쓰고 그 안쪽에서 안쪽에서!'); 
})

function a(){
	console.log('a:'  + data);
}
setTimeout(a, 3000);

// 1. readFile (내부적으로 만들어졌죠?)SSSsss


































