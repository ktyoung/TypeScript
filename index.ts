// Literal Types

// (참고 1) Literal Types 장점?
// 1. 변수의 타입을 더 엄격하게 관리할 수 있음
// 2. 자동완성

// 1. 더 엄격한 타입 지정 (Literal Types)
//  1-1. 일반 변수
let userName :'kim'; // → userName 변수에는 'kim'만 들어올 수 있음
// userName = 123;
let info :'26' | 'anyang';
// info = '10';

//  1-2. 함수
function example1(x :'hello') :(1 | 0) {
    return 1;
}
function example2(x :('가위' | '바위' | '보')) :('가위' | '바위' | '보')[] {
    return ['가위'];
}

// 2. Literal Types은 const 변수와 유사하게 사용 가능
//  2-1. Literal Types은 const 변수의 상위 호환 → 한 번에 여러개의 상수를 저장하여 사용할 수 있음!
const var1 = "hi";
let var2 :"hi" | "hello";

// 3. Literal Types의 문제점?
var content = {
    name :'kim',
} as const

function myFunction(a :'kim') {

}

myFunction(content.name); // → 그냥 사용하면 왜 오류가 발생하는가?
//  3-1. myFunction()의 파라미터는... 'kim'이라는 자료만 들어올 수 있다는 의미가 아니라,
//       'kim'이라는 타입(string)만 들어올 수 있다는 의미이므로!
//  3-2. 문제 해결 방법
//   3-2-1. object 자료형 생성 시 타입 지정을 확실하게
//   3-2-2. assertion
//   3-2-3. object 자료형에 as const 사용

// (참고 2) as const 키워드?
// 1. 이 object는 literal type 지정을 알아서 해달라는 의미
//    → object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly 붙여줌
// 3. object 자료를 매우 엄격하게 관리하고 싶다면 활용