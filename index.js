// implements 키워드
//  2-2. 이 class가 이 interface에 있는 속성을 가지고 있는지 검사
var Car = /** @class */ (function () {
    function Car(a) {
        this.price = 1000;
        this.model = a;
    }
    return Car;
}());
var car = new Car('모닝');
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.tax = function (a) {
        return a * 0.1;
    };
    return MyClass;
}());
