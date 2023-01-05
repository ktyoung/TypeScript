// Type Narrowing 2
// 1. && 연산자로 null & undefined 타입 체크
//  1-1. 변수가 undefined라면 undefined가 남아서 if문이 실행되지 않고, (조건식에 falsy 값이 남으므로)
//  1-2. 변수가 string 타입이면 if문이 실행
//  1-3. 변수가 null, undefined인 경우를 쉽게 거를 수 있는 문법
//  1-4. 굳이 사용하지 않아도 되는 문법... if/else 문법이 더 명확함
function func1(a) {
    if (a && typeof a === 'string') {
    }
}
function func2(animal) {
    // Fish 타입 검사
    if ('swim' in animal) {
        animal.swim;
    }
}
// 3. instanceof 연산자로 object narrowing
var date = new Date();
if (date instanceof Date) {
}
// in(배타적인 속성 없음), instanceof(부모 class 없음) 키워드 사용 불가
function func3(x) {
    if (x.wheel === '4개') {
        console.log("Car 타입입니다.");
    }
    else {
        console.log("Bike 타입입니다.");
    }
}
func3({ wheel: "2개", color: "red" });
// (참고 1) && 연산자의 다른 기능
// 1. && 기호로 비교할 때 true와 false를 넣는게 아니라 자료형을 넣으면
// 2. && 사이에서 처음 등장하는 falsy 값을 찾아주고, 그게 아니면 마지막 값을 남겨줌
// 3. falsy 값은 false와 유사한 기능을 하는 null, undefined, NaN 값들을 의미
1 && null && 3; // null
undefined && '안녕' && 100; // undefined
