// 함수 rest 파라미터, destructuring 할 때 타입 지정
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. rest parameter?
//  1-1. 몇 개의 파라미터가 들어올 지 모를 때 사용
//  1-2. 변수명 앞에 '...' 붙이면 됨
//  1-3. rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있음
//  1-4. rest 파라미터 자리에 집어넣은 값들은 전부 [ ] 안에 담김
//       → 따라서, 타입 지정은 array 타입 지정처럼 해야함
function func1( /*num,*/) {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    console.log(param);
}
func1(1, 2, 3, 4, 5, 6);
// (참고 1) ... spread operator 상식
// 괄호를 제거하는 문법
var arr1 = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(arr3); // → [1, 2, 3, 4, 5] 출력
// (참고 2) destructuring 개념
// array, object 안에 있는 데이터를 변수로 만들고 싶을 때 사용하는 문법
var _a = ["hi", 100], var1 = _a[0], var2 = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
// 2. 함수 파라미터에 destructuring
//  2-1. 항상 같은 모습의 object, array 자료가 들어올 때 쓰는 문법
function func2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
func2({ student: true, age: 20 });
// (참고 3) rest 파라미터, destructuring 활용 연습
function maximum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var max = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] > num[i + 1]) {
            max = num[i];
        }
    }
    return max;
}
console.log(maximum(6, 3, 7, 2, 5, 100, 20));
function objFunction(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
objFunction({ user: 'kim', comment: [3, 5, 4], admin: false });
function arrFunction(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
arrFunction([40, 'wine', false]);
