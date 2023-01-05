// Generic 함수 

// 1. unknown 값을 리턴하는 함수 만들기
function func1(arr :unknown[]) {
    return arr[0]; // → unknown 타입을 리턴함
}
let a = func1([10, 20]);
console.log(a); // → 10 출력... 그러나 타입이 unknown 타입임
// console.log(a + 1); → unknown 타입과 연산 불가

// 2. Generic 함수 만들기
function func2<MyType>(arr :MyType[]) :MyType {
    return arr[0];
}
let b = func2<number>([10, 20]);
console.log(b + 1);

//  2-1. Generic 함수의 장점?
//   2-1-1. 확장성이 좋음 → 매번 다른 타입 출력 가능
let c = func2<string>(['10', '20']);

//  2-2. 타입파라미터 제한 (일종의 narrowing)
//   2-2-1. MyType이 extends 우측에 있는 속성을 가지고 있는지 검사
function minus<MyType extends number>(x :MyType) {
    return x - 1; // → 파라미터의 타입을 제한하지 않으면 x의 타입이 불확실하므로 에러가 발생함
}
let d = minus<number>(100);
//   2-2-2. 사용자 정의 타입도 extends 가능
interface LengthCheck {
    length :number;
}
function func3<MyType extends LengthCheck>(x :MyType) {
    return x.length;
}
let e = func3<string[]>(['100']);

// (참고 1) Generic 함수 연습
function count<MyType extends string | string[]>(x :MyType) {
    return x.length;
}
let str = count<string>('hello');
let arr = count<string[]>(['kim', 'park']);
console.log(str, arr);



let data = '{"name" : "dog", "age" : 1 }';
interface Animal {
    name :string,
    age :number
}
function toObj<MyType>(x :string) :MyType {
    return JSON.parse(x);
}
let result = toObj<Animal>(data);
console.log(result);



class Person<MyType> {
    name;
    constructor(a :MyType) {
        this.name = a;
    }
}
let person = new Person<string>('안녕');
person.name;