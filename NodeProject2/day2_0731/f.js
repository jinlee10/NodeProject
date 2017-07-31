/**
 * 
 */

const fs = require('fs');	//nodejs.org가서 선낭독 후코딩

//동기방식
//var data = fs.readFileSync('../package.json', 'utf-8');	//파일읽기
		

//비동기방식
//fs.readfile('../package.json', 'utf=8', function(data){
//	if(err){
//		console.log(err);
//		
//		console.log('data: ' + data); //비동기면 이부분은 안에넣어야됨
//	}
//});

fs.open('./sam.txt', 'w', function(err, fd){
	if(err){
		conosle.log(err);
		return;
	}
	console.log(fd);
	var buf = new Buffer('안녕안녕');
	
	fs.write(fd, buf, 0, buf.length, function(err, written, buffer){
		if(err){
			console.log(err);
		}
		console.log(written);
		console.log(buffer);
		fs.close(fd, function(){
			console.log(fd, 'close success');
		});
	});	 
});























