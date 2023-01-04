// class 타입 지정

class Person {
    age :number = 20; // → 필드 타입 지정(자동으로 됨)

    // typescript constructor()는 필드값에 변수가 있어야 this.변수 사용 가능
    name :string;
    constructor(myName :string) { // → constructor 파라미터 타입 지정도 가능, 
                                  // return 타입 지정할 필요는 없음(항상 object가 복제되므로)
        this.name = myName;
    }

    // prototype 함수
    myFunction(a :string) :void {
        console.log("안녕하세요, " + a);
    }
}

let person1 = new Person("kim");
let person2 = new Person("lee");

console.log(person1);
console.log(person2);

person1.myFunction("kim");
person2.myFunction("lee");

// (참고 1) class 타입 지정 연습
class Car {
    model :string;
    price :number;

    constructor(model :string, price :number) {
        this.model = model;
        this.price = price;
    }

    tax() :number {
        return this.price / 10;
    }
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

class Word {
    num;
    str;

    constructor(...param) {
        let nums :number[] = [];
        let strs :string[] = [];

        for (let i = 0; i < param.length; i++) {
            if (typeof param[i] === "number") {
                nums.push(param[i]);
            } else {
                strs.push(param[i]);
            }
        }

        this.num = nums;
        this.str = strs;
    }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);