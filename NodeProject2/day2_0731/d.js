/**
 * 
 */

// 3교시

//주기적 작업 할때. Java의 Thread.sleep()과 유사한개념

// 1) setTimeout(함수명, 1000mili sec); // x ms가 지난후 함수명 함수를 실행하라
// 2) setInterval();


// 1. ------------ SETTIMEOUT ------------

function a(){
	console.log('a');
}

//setTimeout(a, 500); //일정한 시간이 지난 후 함수를 호출하시오
//
//console.log('b');		// 선 생각 후 실행!!!!!!!!!!!!!!!!!!!!



// 2. ------------ setInerval() ---------------

//setInterval()은 반환값을 갖는다.
//clearTimeout(변수명)을 써서 멈출수있겟지?
setInterval(a, 500);

function b(){
	clearTimeout(time);
}

setTimeout(b, 5000);
console.log('b');












