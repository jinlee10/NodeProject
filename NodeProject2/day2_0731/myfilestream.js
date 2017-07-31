/**
 * 
 */

const fs = require('fs');

//파일 읽기 (비동기/동기)
exports.readMyFile = function(fname, func){
	fs.readFile(fname, 'utf-8', func);
};

exports.readMyFileSync = function(fname){
	return fs.readFileSync(fname, 'utf-8');
};


// 파일 쓰기 (비동기/동기)
exports.writeMyFile = function(fname, data, func){
	fs.writeFile(fname, data, 'utf-8', func);
};

exports.writeMyFileSync = function(fname, data){
	return fs.writeFileSync(fname, data, 'utf-8');
};


// 디렉토리 만들기 (비동기/동기)
exports.makeMyDir = function(fdir, func){
	if(func.err){
		fs.mkdir(fdir, 0666, function(func.err)){
			if()
		}
	}
};

exports.deleteMyFile = function(fname){
	
};

exports.renameMyfile = function(oldname){
	
};

exports.getFileList = function(){
	
};






























