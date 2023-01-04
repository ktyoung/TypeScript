// object 타입 지정

// type alias 사용
type SquareType1 = { color :string, width : number }
let square1 :SquareType1 = { color : 'red', width : 100 }

// interface 사용
interface SquareType2 { 
    color :string, 
    width : number
}
let square2 :SquareType2 = { color : 'red', width : 100 }

// 1. interface의 장점? extends로 복사 가능
interface StudentType { 
    name :string 
}
// StudentType의 type을 사용할 수 있음
interface TeacherType extends StudentType { 
    age :number 
}

let student :StudentType = { name : 'kim' }
let teacher :TeacherType = { name : 'kim', age : 40 }

// 2. & 기호도 유사한 기능을 만들 수 있음(intersection type)
//  2-1. extends와 달리 두 타입을 모두 만족하는 타입을 생성 (interface는 타입을 복사해줌)
type Animal = { name :string }
type Cat = { age :number } & Animal

let cat :Cat = { name : "cat", age : 5 }

// (참고 1) type과 interface의 차이점
// 1. interface는 중복 선언 가능 (유연함)
interface Interface {}
interface Interface {}
interface Interface {}
// 2. type은 중복 선언 불가능 (엄격함)
type MyType = string;
// type MyType = string;
// type MyType = string;

// (참고 2) interface의 장점
// 1. 외부 라이브러리의 경우 interface를 많이 사용 → 커스터마이징이 매우 쉬움
//    다른 사람이 많이 이용할 것 같다면, object 타입을 정할 때 interface 사용

// (참고 3) 중복 속성 발생 시
// 1. extends 사용할 때 interface는 에러로 잡아줌
interface MyInterface1 {
    name :string
}
// interface MyInterface2 extends MyInterface1 {
//     name :number
//     age :number
// }

// 2. & 기호에서는 에러가 발생하지 않음! → 변수에서 사용할 때 에러로 잡아줌
type Type1 = { name : string };
type Type2 = { name : number } & Type1;
// let var1 :Type = { name : 'kim'};

// (참고 4) interface 연습
interface ProductType {
    brand :string, 
    serialNumber :number, 
    model :string[]
}
let product :ProductType = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }



interface CartType {
    product :string,
    price :number
}
let cart :CartType[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]



interface NewType extends CartType {
    card :boolean
}
let newCart :NewType = { product : '청소기', price : 7000, card : false }



interface MathType {
    plus(x :number, y :number) :number,
    minus(x :number, y :number) :number
}
let obj :MathType = {
    plus(x, y) {
        return x + y;
    },
    minus(x, y) {
        return x - y;
    }
}