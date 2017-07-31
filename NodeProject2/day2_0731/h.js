/**
 * 
 */

const fs = require('fs');
const path = require('path');

// join은 concat이 절대 아냐!
// 
var newFolder = path.join(__dirname, 'data');	//경로명 하위에 데이터

fs.stat(newFolder, function(err, stat){	//폴더 존재하는지 확인
	//우선 파일상태 검사
	if(err){
//		console.log(err);	
		//err이 트루일때만폴더 만들어준다
		fs.mkdir(newFolder, 0666, function(err){
			if(err){
				console.log('fs.mkdir 에러!' + err);
			}else{
				console.log('folder make success!');
			}
			
			
		});
	}else{	//에러없으면
		console.log('folder eixts');
		//기존에 폴더가 있어서 안만들어짐 표시
	}
	
});

//이름바꾸기 목록 불러오기도 할거야!

























