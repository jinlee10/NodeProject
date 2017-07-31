/**
 * 
 */

const myfs = require('./myfilestream'); //불러온다

var fname = './javaJoa.txt';
var data = '히히히123';

// 1. 파일읽기
myfs.readMyFile(fname, (err, data) =>{
	if(err) console.log(err);
	else{
		console.log('1. 읽기(비동기)');
		console.log('data: ' + data + '\n');
	}
});

myfs.readMyFileSync(fname);
console.log('1. 읽기(동기)');
console.log('data: ' + data + '\n');



// 2. 파일쓰기
var fname1 = './javaZzang.txt';
var fname2 = './javaZzang1.txt';

myfs.writeMyFile(fname1, data, (err, data) => {
	if(err)console.log(err);
	else console.log('2. 파일에 데이터 쓰기 끝(비동기) \n');
});

console.log('2. 파일에 데이터 쓰기(동기) \n');
myfs.writeMyFileSync(fname2, data);



// 3. 디렉토리 만들기
var newFolder = path.join(__dirname, 'folder1');
var newFolder1 = path.join(__dirname, 'folder2');
s
myfs.makeMyDir(newFolder, (err, stat) => {
	if(err){
		fs.mkdir(newFolder, 0666, function(err)){
			if(err){
				console.log(err);
			}else{
				console.log('successfully made a folder'));
			}
		}
	}else{
		console.log('folder exists');
	}
});


























