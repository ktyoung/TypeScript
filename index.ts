// object 타입 변환기

// 1. keyof 연산자
//  1-1. JS 방식
let obj = {
    name : 'kim',
    age : 20,
}
Object.keys(obj); // → 오브젝트 자료의 key 값을 array에 담아 보여줌 ['name', 'age']

//  1-2. TS 방식
interface Person {
    name :string,
    age :number
}
type PersonKeys = keyof Person // → key 값을 Union Type으로 보여줌 'age' | 'name'
let var1 :PersonKeys = 'name'

//  1-3. index signature에 keyof 쓰면?
interface Phone {
    [key :string] :number
}
type PhoneKeys = keyof Phone // → string | number 타입
let var2 :PhoneKeys = "iPhone"



// 2. 타입 변환기 (type mapping)
//  2-1. [ 자유작명 in keyof 타입파라미터 ] :원하는 타입
type Car = {
    color :boolean,
    model :boolean,
    price :boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] :string
    // == key in 'color' | 'model' | 'price'
}

type NewType = TypeChanger<Car>



// (참고 1) Type Mapping 연습
type Bus = {
    color :string,
    model :boolean,
    price :number
}
type BusChanger<MyType> = {
    [key in keyof MyType] :string | number
}
type NewBus = TypeChanger<Bus>



type Student = {
    name :string,
    age :number,
    score :number,
    subject :string
}
type StudentChanger<MyType, T> = {
    [key in keyof MyType] :T
}
type NewStudent = StudentChanger<Student, string[]>