/**
 * 			NOT IN DA BOOK!
 */

const fs = require('fs');
const path = require('path');

//이름 바꾸기
//var oldname = path.join(__dirname, 'output2.txt'); //요것의 이름을 고칠것이야
//var newname = path.join(__dirname, 'javaJoa.txt');
//
////있으면 하고 어 ㅄ으면 하지 말아야하니까 fs.stat메소드!
//fs.stat(oldname, function(err, state){
//	if(err){
//		console.log('해당 파일이 없어!');
//		return;
//	}
//	if(state){
//		fs.rename(oldname, newname, function(err){
//			if(err){
//				//누군가 파일을 오픈하고있으면(접근하고있으면)
//				console.log('rename failed!');
//			}else{
//				console.log('rename succeeded!');
//			}
//			
//		});
//	}
//});


//목록 불러오기			위치가 중요하지 변수명은 노상관!
fs.readdir('.', function(err, files){	//files는 배열일 가능성이!
	if(err){
		console.log('list loading fails!');
		return;
	}
	
	// foreach: //배열만큼 전체를 반복한다
	files.forEach(function(v, index){	//배열의 index를 받을수도있다
		console.log(v, index);
	});
});

























