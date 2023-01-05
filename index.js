// public, private
// 1. public 키워드
var User1 = /** @class */ (function () {
    function User1(str) {
        this.name = str;
    }
    // 1-3. 함수에도 public 키워드 사용 가능
    User1.prototype.myFunction = function () {
    };
    return User1;
}());
var user_1 = new User1('park');
user_1.name = "park";
// 2. private 키워드
var User2 = /** @class */ (function () {
    function User2(str) {
        this.familyName = "Kim"; // → familyName은 사용자가 임의로 변경하면 안 되는 변수
        this.name = this.familyName + str;
    }
    //  2-2. 자식들이 familyName을 바꾸고 싶으면? → 수정 함수 작성 후 자식들이 사용
    User2.prototype.changeName = function () {
        this.familyName = "park";
    };
    return User2;
}());
var user_2 = new User2('Minsu');
console.log(user_2);
// console.log(user_2.familyName); → familyName 속성 사용 불가
user_2.changeName(); // → 수정 함수로 private 속성인 familyName을 수정함
console.log(user_2);
// 3. public 키워드 쓰면 this 키워드 생략 가능
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person = new Person('kim');
console.log(person);
