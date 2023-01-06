// implements 키워드

// 1. interface는?
//  1-1. object 타입 지정할 때 사용
//  1-2. class 타입을 확인하고 싶을 때도 사용 가능함

// 2. Car class로부터 생산되는 object는 model과 price 속성을 가짐
//  2-1. class가 model, price 속성을 가지고 있는지 타입으로 확인하려면 implements 키워드 사용
interface CarType {
    model :string,
    price :number
}
//  2-2. 이 class가 이 interface에 있는 속성을 가지고 있는지 검사
class Car implements CarType {
    model :string;
    price :number = 1000;
    constructor(a :string) {
        this.model = a;
    }
}
let car = new Car('모닝');

// 3. implements는 타입 지정 문법이 아님!
//  3-1. interface에 들어있는 속성을 가지고 있는지 검사하라는 의미
//       → class에 타입을 할당하고 변형시키는 키워드가 아님
interface MyType {
    age :number,
    tax :(price :number) => number;
}

class MyClass implements MyType {
    age; // → any 타입
    tax(a) { // → 파라미터도 any 타입
        return a * 0.1;
    }
}