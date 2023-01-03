// 함수와 methods에 type alias 지정

// 1. 일반적인 타입 지정
function example1(a :string) :number {
    return 1;
}

// 2. type alias에 함수 type 저장해 사용
//  2-1. 함수 타입은 () => {}의 형태로
type FunctionType1 = (a :string) => number;
//  2-2. 함수표현식에만 type alias 사용 가능
let myFunction :FunctionType1 = function example2(a) {
    return 1;
}

// 3. object 자료형 안에 함수를 생성할 수 있음... 타입 지정은 어떻게?
let info1 = {
    name : 'kim',
    plusOne(a :number) :number {
        return a + 1;
    },
    changeName : () => {},
}

// (참고 1) 콜백함수?
function func1(a) {
    a()
}
function func2() {

}
func1(func2); // func2가 콜백함수

// (참고 2) type alias 연습
type Member = {
    name : 'kim',
    plusOne : (x :number) => number,
    changeName : () => void,
}
let info2 :Member = {
    name : 'kim',
    plusOne(a :number) :number {
        return a + 1;
    },
    changeName : () => {},
}

// ===== //

type FunctionType2 = (str :string) => string
let cutZero :FunctionType2 = function cutZero(str) {
    // 특정 문자 제거하기
    let newStr :string = str.replace(/^0+/, '');
    return newStr;
}

let removeDash :FunctionType2 = function removeDash(str) {
    // 특정 문자 모두 제거하기(정규식 사용)
    let newStr :string = str.replace(/-/g, ''); // → '/'는 정규식의 시작과 끝을 의미, 'g'는 Global Search(전역탐색)을 의미
    return newStr;
}

console.log(cutZero('00123130'));
console.log(removeDash('----123---zzz------123'));

// ===== //

type MyType = (str :string) => string;

function myFunction2(a :string, func1 :MyType, func2 :MyType) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
myFunction2('010-1111-2222', cutZero, removeDash);