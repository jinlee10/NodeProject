/**
 * 		2회차dd
 */

const myfs = require('./myfilestream1');

var fname = 'aaa.txt';
var dirname = '..';

//var res1 = myfs.readMyFile(fname, dirname);
//console.log(res1);	
//이건 동기방식으로 짜겠다야
//(다 읽어들이고나서 보여주겠다)
//대신 다른작업은 못한다잉 (합계구해다가 뭐하는거면 ㅇㅈ)






//하기전에 fs.stat이나 fs.access로 파일/디렉토리 
//존재여부 확인해야하는지 궁금!!








// 비동기방식으로 읽기
//test에서 함수만들어서 던져주겠다
myfs.readMyFile(fname, dirname, (err, data)=>{//오류날시 err와 값담을 변수
	if(err){
		console.log(err);
		return;
	}
	console.log('\n1. data(비동기식 읽기): ' + data + '\n'); //
}); 


// 동기방식으로 읽기
var data1 = myfs.readMyfileSync(fname, dirname);
console.log('1. data(동기식 읽기): ' + data1);






//쓰기
//비동기방식으로 쓰기
var fileName = 'blah.txt';
var content = '김수한무두루미와거북이';
myfs.writeMyFile(fileName, content, (err)=>{
	if(err){
		console.log('파일쓰기(비동기) 에러!');
		return;
	}
	console.log('2. 유후! 파일쓰기(비동기) 성공!');
});

//동기방식으로 쓰기
var fileName1 = 'blah1.txt';
myfs.writeMyFileSync(fileName1, content);
console.log('2. 파일쓰기(비동기) 진행해보았으나 결과는..?');



//디렉토리 만들기
//비동기
var dir1 = './newFolder';
myfs.mkMydir(dir1, (err)=>{
	if(err){
		console.log(err);
	}
	console.log('3. 비동기 디렉토리 잘 만들어졌나?');
});

//동기
var dir2 = './newFolder2';
myfs.mkMydirSync(dir2);
console.log('3. 동기 디렉토리 잘 만들어...ㅆ...?');




var dir = '..';
//비동기로 목록 읽겠다
myfs.readfList(dir, (err, files)=>{
	if(err){
		console.log(err);
		return;
	}
	console.log('6. 목록 읽기(비동기)');
	
	//forEach에 함수돼!	//다른거안에만들어진함수: 클로저
	//썜피셜 엄청 많이나오는데 this만 조심하면 ok
	files.forEach(function(v){
		console.log(v);
	});
});

//var arr = [1,5,2,4,6,2,6];
//foreach는 배열에서만 쓰는놈
//for(i = 0; i<arr.length; i++){
//	console.log(arr[i]);
//}
//
//arr.forEach = function(fn){		//대략....
//	for(i = 0; i < arr.length; i++){//자기함수만큼 반복
//		fn(arr[i]);
//	}
//}

//배열의 메소드야 forEach는!
//arr.forEach(function(fn){
//	console.log(fn);
//});


// ===========================























