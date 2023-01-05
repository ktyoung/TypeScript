// Generic 함수 
// 1. unknown 값을 리턴하는 함수 만들기
function func1(arr) {
    return arr[0]; // → unknown 타입을 리턴함
}
var a = func1([10, 20]);
console.log(a); // → 10 출력... 그러나 타입이 unknown 타입임
// console.log(a + 1); → unknown 타입과 연산 불가
// 2. Generic 함수 만들기
function func2(arr) {
    return arr[0];
}
var b = func2([10, 20]);
console.log(b + 1);
//  2-1. Generic 함수의 장점?
//   2-1-1. 확장성이 좋음 → 매번 다른 타입 출력 가능
var c = func2(['10', '20']);
//  2-2. 타입파라미터 제한 (일종의 narrowing)
//   2-2-1. MyType이 extends 우측에 있는 속성을 가지고 있는지 검사
function minus(x) {
    return x - 1; // → 파라미터의 타입을 제한하지 않으면 x의 타입이 불확실하므로 에러가 발생함
}
var d = minus(100);
function func3(x) {
    return x.length;
}
var e = func3(['100']);
// (참고 1) Generic 함수 연습
function count(x) {
    return x.length;
}
var str = count('hello');
var arr = count(['kim', 'park']);
console.log(str, arr);
var data = '{"name" : "dog", "age" : 1 }';
function toObj(x) {
    return JSON.parse(x);
}
var result = toObj(data);
console.log(result);
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var person = new Person('안녕');
person.name;
