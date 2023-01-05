// protected, static
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. protected 키워드
//  1-1. private 키워드와 유사함 → 클래스 안에서만 사용, 수정 가능
var User1 = /** @class */ (function () {
    function User1() {
        this.x = 10;
    }
    return User1;
}());
//  1-2. 차이점? 상속된 클래스에서도 사용 가능 (private는 상속해도 사용 불가)
//  1-3. extends 된 class는 사용 가능, 자식들 사용 불가능
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User1));
// 2. static 키워드
//  2-1. 부모 class에 직접 부여되는 키워드(자식에게 물려주지 않음) → 부모 클래스에서만 사용 가능
var User2 = /** @class */ (function () {
    function User2() {
    }
    User2.x = 10;
    // 2-2. private / protected / public + static 가능
    User2.y = 20;
    return User2;
}());
var child = new User2();
// console.log(child.x); → 오류 발생
console.log(User2.x);
// 3. 접근제한자 활용 예시
var User3 = /** @class */ (function () {
    function User3() {
        this.intro = User3.skill + ' 전문가입니다.';
    }
    User3.skill = 'js';
    return User3;
}());
var user_3 = new User3();
console.log(user_3);
User3.skill = "ts"; // → 이후 자식들은 ts skill을 가짐
var user_4 = new User3();
console.log(user_4);
