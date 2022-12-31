// 타입스크립트 사용하기
// 1. Nodejs 최신버전 설치
// 2. 터미널에 npm install -g typescript
// 3. 작업 폴더 생성 및 열기
// 4. .ts 파일 생성 → 웹브라우저는 .ts 파일을 인식하지 못하므로 .js 파일로 변환해야 함
//  4-1. 터미널에 tsc -w 입력해두면 자동으로 ts 파일을 js 파일로 변환
// 5. HTML 파일 등에서 타입스크립트로 작성한 코드를 사용하려면 변환된 .js 파일 사용

// 타입스크립트 문법
// 1. 변수 타입 지정 가능
//  1-1. 일반 변수
let userName :string = 'kim'; // → userName 변수에는 string 타입만 입력할 수 있다
//  1-2. array 자료형
let arrUsers :string[] = ['kim', 'park']; // → users에는 string 타입의 array만 들어올 수 있다
// ?를 붙이면 name 속성은 옵션이라는 의미(name 값이 비어있어도 오류가 발생하지 않음)
//  1-3. object 자료형
let objUsers :{ name? : string } = { name : 'kim' }; // → object 타입을 string 타입으로 지정

// 2. 다양한 타입을 지정하려면? | 기호를 사용! Union Type
let var1 :string | number = 'kim'; // → var1 변수에는 string 또는 number 타입만 입력할 수 있다

// 3. 타입을 변수에 담아 사용할 수도 있음! Type alias
type MyType = string | number;
let var2 :MyType = 123;

// 4. 함수에도 타입 지정이 가능하다
//                  ↓ 파라미터에 타입 지정을 하려면 이 곳에 타입을 입력
//                          ↓ return 값에 타입 지정을 하려면 이 곳에 타입을 입력
function func(x :number) :number { 
    return x * 2;
}
// 위 함수는 파라미터와 return 값이 모두 number 타입이어야만 한다.

// 5. array에 사용할 수 있는 tuple 타입
// → '반드시' 첫 번째 자료에는 number, 두 번째 자료에는 boolean 타입이 입력되어야 한다
type TupleMember = [number, boolean];
let john :TupleMember = [123, true];

// 6. object 자료형에 지정해야 할 타입이 많으면?
type ObjMember = {
    [key :string] :string // → 문자열로 된 모든 object 속성의 타입을 string으로 지정
}
let jane :ObjMember = { name : 'kim', age : '123' }

// 7. class 타입 지정 가능
class Example {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}