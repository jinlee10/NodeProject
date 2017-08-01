/**
 * 
 */

// JS: 모든 함수는 리턴된다! (return을 안써도...)
//			***** 함수가 함수를 리턴할수도 있다 *****
//				얘를 [변수]로 받아서 호출할수도있다!
//				호출시 인자 들어가는것정도는 확인할것!

function foo(){
	
//	return 10;
//	return 'javaScript';
//	return [3, 3, 6];
//	return {name : 'foo'};	//객체리턴
	return function(a, b){		//함수리턴
		console.log('허미...ㅎㅎ,,~~' + (a + b));
	}
}

var a = foo();
//var a = new foo(); //new 하면 객체가 리턴된다

console.log(a);
//리턴된게 함수인 경우라면
a(3, 99);

//var sleep = require('system-sleep');
//function a(){
//	sleep(5000);		//5 sec
//	console.log('X');
//}

// ------------------- //





























