// Narrowing & Assertion
// 1. Type이 하나로 확정되지 않았을 경우 Type Narrowing(타입을 하나로 확정) 사용
//  1-1. 대표적인 Narrowing 방법은? typeof 연산자
function myFunc1(x) {
    if (typeof x === "string") {
        console.log(x);
    }
    else {
        return x + 1;
    }
}
//  1-2. (주의점) if문은 else, else if문으로 마무리하는 것이 에러 방지로 좋음
function myFunc2(x) {
    var arr1 = [];
    // Narrowing
    if (typeof x === "number") {
        arr1[0] = x;
    }
    else {
        console.log(x);
    }
}
// 2. Type Assertion (타입 덮어쓰기)
//  2-1. 용도는? 
//   2-1-1. Narrowing할 때 사용(타입을 a에서 b로 변경하는 것이 아님!)
//    (불가능 예) let var1 :number = 1; 
//               var1 as string;
//   2-1-2. 무슨 타입이 들어올 지 100% 확실할 때 사용
function myFunc3(x) {
    var arr2 = [];
    // Assertion
    arr2[0] = x; // → 왼쪽 변수를 number로 덮어씀
}
// (참고 1) Narrowing 판정 문법 → 현재 변수의 타입을 특정할 수만 있다면 Narrowing 판정 문법임
// 1. typeof 변수명
// 2. 속성명 in 오브젝트자료
// 3. 인스턴스 instanceof 부모
// (참고 2) Narrowing 연습
function toNumber(arr3) {
    var newArr = [];
    arr3.forEach(function (b) {
        if (typeof b === 'string') {
            newArr.push(parseFloat(b));
        }
        else {
            newArr.push(b);
        }
    });
    return newArr;
}
console.log(toNumber([123, '3']));
var teacher1 = { subject: "math" };
var teacher2 = { subject: ["science", "english"] };
var teacher3 = { hello: "hi" };
function teacher(sub) {
    if (typeof sub.subject === "string") {
        return sub.subject;
    }
    else if (Array.isArray(sub.subject)) {
        return sub.subject[sub.subject.length - 1];
    }
    else {
        return "타입 에러!";
    }
}
console.log(teacher(teacher1));
console.log(teacher(teacher2));
// console.log( teacher( teacher3 ) );
