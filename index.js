// tuple type
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. [tuple type] : 위치까지 고려한 타입 지정
// 2. 옵션 표현은 '?' 붙이기
//  2-1. 옵션 기호는 가장 뒤에만 붙일 수 있음
var dog = ['dog', true];
// 3. 함수에서 쓰는 tuple
//  3-1. rest parameter를 출력하면 array 자료형[]으로 출력됨
//       → 타입 지정 시 tuple 가능
function myFunction() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
myFunction(1, '2');
// 4. array 합칠 때 '...'
//  4-1. '...' spread 연산자의 타입은 rest parameter와 유사한 방법으로 지정
var arr1 = [1, 2, 3];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [4, 5], false);
console.log(arr2);
// (참고 1) tuple 활용 연습
var test1 = ['아메리카노', 4000, true];
var test2 = ['동서녹차', 4000, true, false, true, true, false, true];
function test3() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
test3("hi", true, 1, '2', 3, '4', '5');
function test4() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = [[], []];
    x.forEach(function (a) {
        if (typeof a === 'string') {
            result[0].push(a);
        }
        else {
            result[1].push(a);
        }
    });
    return result;
}
console.log(test4('b', 5, 6, 8, 'a'));
