console.log(score); //undefinded

var score; //변수 선언문

//변수선언하는 코드가 3번째 줄에 있어서 referenceError가 날 법 한데 undefinded 가 나올 것이다.
//그 이유는 .js 엔진은 변수 선언을 포함한 모든 선언문(변수선언문 / 함수선언문)을 소스코드에서 찾아서 먼저 실행하고
//소스코드의 평가가 끝나면 (변수선언을 포함 한)모든 선언문을 제외하고 나머지 소스코드를 한 줄 씩 순차적으로 실행하기 때문.

//결론적으로 변수선언이 재일 먼저 읽히고 다른 코드가 순차적으로 읽힌단거지! variable hoisting

console.log("variable hoisting");
//var, let, const, function, class 키워드를 사용한 모든 식별자를 호이스팅한다.