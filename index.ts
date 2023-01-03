// type alias (타입변수)

// 1. 타입 변수 생성 및 사용 → 타입 변수는 영어 대문자로 시작하여 일반 변수와 차이점을 두기
//  1-1. 일반 변수
type MyType1 = string | number | undefined;
let var1 :MyType1 = "Hello!";
//  1-2. object 자료형
type MyType2 = { name : string, age : number };
let obj1 = { name : 'kim', age : 20 };

// 2. type 키워드 여러개를 extend
//  2-1. OR 연산자를 이용해서 Union type
type Name = string;
type Age = number;
type Person = Name | Age;
//  2-2. & 기호를 쓴다면 object 안의 두개의 속성을 extend
type PositionX = { x :number };
type PositionY = { y :number };
type Coordinate = PositionX & PositionY; // == { x :number, y :number }
let position :Coordinate = { x : 10, y : 20 };

// (참고 1) const 변수는 변경할 수 없는 변수
const city1 = 'seoul';
// 1. const 변수는 등호로 재할당을 막는 역할... object 수정은 자유롭게 가능
const city2 = { city : 'anyang' };
city2.city = 'busan';
// 2. 타입스크립트는 object 자료 수정을 방지할 수 있다 → readonly 키워드
type MyType3 = { readonly city :string };
const city3 :MyType3 = { city : 'daegu' };
// city3.city = 'goseong'; → readonly 키워드 때문에 에러 발생

// (참고 2) 같은 이름의 type 변수는 재정의 불가능
type MyType4 = string;
// type MyType4 = number; → 에러 발생

// (참고 3) type alias 연습
type Type1 = {
    color? :string,
    size : number,
    readonly position : number[]
}

type Type2 = {
    name :string,
    phone :number,
    email :string
}

type Type3 = {
    teen :boolean;
}
type NewType = Type2 & Type3