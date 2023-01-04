// class 타입 지정
var Person = /** @class */ (function () {
    function Person(myName) {
        this.age = 20; // → 필드 타입 지정(자동으로 됨)
        // return 타입 지정할 필요는 없음(항상 object가 복제되므로)
        this.name = myName;
    }
    // prototype 함수
    Person.prototype.myFunction = function (a) {
        console.log("안녕하세요, " + a);
    };
    return Person;
}());
var person1 = new Person("kim");
var person2 = new Person("lee");
console.log(person1);
console.log(person2);
person1.myFunction("kim");
person2.myFunction("lee");
// (참고 1) class 타입 지정 연습
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        for (var i = 0; i < param.length; i++) {
            if (typeof param[i] === "number") {
                nums.push(param[i]);
            }
            else {
                strs.push(param[i]);
            }
        }
        this.num = nums;
        this.str = strs;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
