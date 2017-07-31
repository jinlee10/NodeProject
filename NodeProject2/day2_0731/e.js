
// ----------- URL & URI -------------
//	http://www.google.co.kr:80/test/img/sam/aa.js?a=n&b=d
//url: 전체
//test~d까지가 URI:하나하나 구분하는거(unique함을)

// http에서: url은 uri의 하위개념이다
// 안드에서: uri 클래스가 따로 있다. 
// (url, file, 미디어, 주소 등을 하나하나 구분하는거)

// ==> 마냥 책보고 한다는게아니고
// nodejs.org에서 함 봐라

const url = require('url');	//자바의 final과 같다
// 쿼리스트링모듈
const querystring = require('querystring');	//require하는애들은 대부분 고쳐지는 경우가 ㅇ벗어 const쓴다

var surl = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string&name=korea&age=20#hash';

var currenturl = url.parse(surl);	//parse하면 url객체 반환됨
var href = currenturl.href;

console.log('href: ' + href);
console.log('host: ' + currenturl.host); //host: port까지 가지는놈
console.log('query: ' + currenturl.query);

var obj = querystring.parse(currenturl.query); //querystring을 json객체로만듦

console.log('query: ' + currenturl.query); //?다음부터 (있으면) #앞까지오는애들











