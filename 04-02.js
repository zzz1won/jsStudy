//04-01
10 + 20


//변수에 여러 개의 값을 저장하는 방법

//변수는 하나의 값을 저장하기 위한 매커니즘.
//여러 개의 값을 저장하려면 여러 개의 변수를 사용해야한다.
//단 배열이나 객체같은 자료 구조를 사용하면, 관련이 있는 여러개의 값을 그룹화해서 하나의 값처럼 사용할 수 있다.

var userId = 1;
var userName = 'Lee';

//객체나 배열같은 자료 구조를 사용.
var user = { id: 1, name: 'Lee'};

var users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Kim'}
];

//04-03
var result = 10 + 20;
console.log(result);