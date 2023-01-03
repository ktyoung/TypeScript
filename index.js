// 함수와 methods에 type alias 지정
// 1. 일반적인 타입 지정
function example1(a) {
    return 1;
}
//  2-2. 함수표현식에만 type alias 사용 가능
var myFunction = function example2(a) {
    return 1;
};
// 3. object 자료형 안에 함수를 생성할 수 있음... 타입 지정은 어떻게?
var info1 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
// (참고 1) 콜백함수?
function func1(a) {
    a();
}
function func2() {
}
func1(func2); // func2가 콜백함수
var info2 = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
var cutZero = function cutZero(str) {
    // 특정 문자 제거하기
    var newStr = str.replace(/^0+/, '');
    return newStr;
};
var removeDash = function removeDash(str) {
    // 특정 문자 모두 제거하기(정규식 사용)
    var newStr = str.replace(/-/g, ''); // → '/'는 정규식의 시작과 끝을 의미, 'g'는 Global Search(전역탐색)을 의미
    return newStr;
};
console.log(cutZero('00123130'));
console.log(removeDash('----123---zzz------123'));
function myFunction2(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
myFunction2('010-1111-2222', cutZero, removeDash);
