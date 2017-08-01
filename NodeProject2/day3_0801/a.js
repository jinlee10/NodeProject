/**
 * 			함수전달dd
 */
var sleep = require('system-sleep');

function foo(){
	
}

function add(a, b, c, d, e){
	var tot = a + b;   //내가받은함수를
	var name = c.name;
	d.sort();
	setTimeout(e(3, 4), 100);	//전달**
	foo(a, e);	//할떄는 이름만, 값을 호출할때만 ()
}//여기까지는 동기(완료되어야 넘어간다)

	//함수를만들어 인자로 전달하고받는쪽에서 호출도된다
var fnc = function(err, data){
	
};

//일반적으로 값이나 변수를 전달할수있는것ㄱ처럼
//함수도 매개변수로 받을수있고
//함수라는 조건하에 받아서(, e) 호출(e())할수있따
add(3, 4, {name : 'JohnCena'}, [3, 4], function(err, data){
	//우에서 e를 실행할 차례가 되면 여기가 실행되지
	//(12번이 실행되자마자 여기가 실행된다)
});

/////////////////////////////////////////////////////////
// --------------------------------------------------- //
/////////////////////////////////////////////////////////


//function a(){
//	sleep(3000);
//	console.log('x');
//}
//
//console.log('a');	//console의 log메소드
////a();	//함수를 호출한다
//setTimeout(a, 10); //10 milli sec
//console.log('b');	//기본적으로 동기식으로 동작
//console.log('c');	//a -> b -> c 순서로 호출
//					//동기 메소드















