//04-11 값의 재할당
var score = 80;
score = 90;
console.log(score);

//식별자 identifier 네이밍 규칙
//1. 특수문자를 제외한 문자, 숫자, 언더스코어(-), 달러 기호($)를 포함할 수 있다.
//2. 식별잔느 특숩문자를 제외한 문자, 언더스코어(_), 달러 기호($)로 시작해야한다. 숫자로 시작 할 수 없다.
//3. 예약어는 식별자로 사용하지 않는다.

//04-12 한번에 변수선언이 가능하지만 가독성을 위해 그러지 않는다
var person, $elem, _name, first_name, val1; 

//04-13
//웬만하면 알파벳만 사용.
var 이름, なまえ

//04-14
//명명규칙에 위배된다.
//var 1st 숫자로 시작X
//var first-name (-)사용X
//var this 예약어사용X

//04-15
//대소문자를 구분하므로 다른 변수로 선언된다.
//고로 대소문자를 틀리지 않게 조심.
var firstname;
var firstName;
var FIRSTNAME;

//04-16
//좀 더 명확한 표현을 해야한다.
var x = 30; //x 변수가 의미하는 바를 바로 알 수 없음
var score = 30;

//04-17
var d; //x
var elapsedTimeInDays; //o
//변수 선언에 별도의 주석이 필요하지 않도록.

// -----------------
//04-18 자주 사용되는 네이밍 컨벤션
var firstName; //카멜케이스

var first_name; //스네이크케이스

var FirstName; //파스칼케이스

//헝가리언 케이스
var srtFirstName; // type+identifire
var $elem = document.getElementById('myId'); //DOM 노드
var observable$ = fromEvent(document, 'click'); //RxJS 옵저버블