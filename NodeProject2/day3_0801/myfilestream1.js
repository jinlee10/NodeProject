/**
 * 		2회차dd(sync async다생각해서 12개)
 */

const fs = require('fs');
const path = require('path');

exports.readMyFile = function(fname, dirname, fn){
	var dirfName = path.join(dirname, fname);	//join시 경로가 앞이야!
	
	//file다읽으면 호출될 콜백함수 등록
	fs.readFile(dirfName, fn);
}

exports.readMyfileSync = function(fname, dirname, fn){
	var dirName = path.join(dirname, fname);
	
	return fs.readFileSync(dirName);
}



// 파일 쓰기
//비동기방식
exports.writeMyFile = function(fname, content, fn){
	//file쓰자
	fs.writeFile(fname, content, 'utf8', fn);
}

//동기방식
exports.writeMyFileSync = function(fname, content){
	fs.writeFileSync(fname, content, 'utf8');
}


//폴더생성
//비동기방식으루다가 생성하기
exports.mkMydir = function(dir, fnc){
	fs.mkdir(dir, fnc);
}

//동기방식으루다가 생성하기
exports.mkMydirSync = function(dir){
	fs.mkdir(dir);
}



//목록불러옥


exports.readfList = function(dir, func){
	fs.readdir(dir, func);
}






















