/**
 * http://usejsdoc.org/
 */


const fs = require('fs');

var fname = './sam.txt';	//대소문자구분? (ms는 file의 대소문자 구분안함. linux는 함)


//fs.exists(fname, function(exists){//exists() : depricated!
//	console.log(exists ? 'its there' : 'not there!');
//});	

//stat
fs.stat(fname, function(err, stats){
	if(err){
		console.log(err);
	}
	console.log(stats);		//공부 이렇게 찾아가면서 하는버릇!
	
	if(!err){ //있으면
		fs.unlink(fname, function(err){	//인자로 err을 줄 수도 있고..
			if(err){
				console.log(err);	//오류가 났으면 표시
			}else{
				console.log('삭제 성공!');
			}
		});
	}
});






//var infile = fs.createReadStream('./sam.txt', {falgs: 'r'});
//var outfile = fs.createWriteStream('../output2.txt', {flags: 'w'});
//
//infile.on('data', function(data) {
//	console.log('읽어들인 데이터', data);
//	outfile.write(data);	//데이터를써라
//});
//
//infile.on('end', function(){
//	console.log('파일 읽기 종료');
//	outfile.end(function(){
//		console.log('파일쓰기 종료');
//	});
//});



