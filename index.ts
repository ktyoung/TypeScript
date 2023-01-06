// tuple type

// 1. [tuple type] : 위치까지 고려한 타입 지정
// 2. 옵션 표현은 '?' 붙이기
//  2-1. 옵션 기호는 가장 뒤에만 붙일 수 있음
let dog :[string, number,boolean?] = ['dog', true];

// 3. 함수에서 쓰는 tuple
//  3-1. rest parameter를 출력하면 array 자료형[]으로 출력됨
//       → 타입 지정 시 tuple 가능
function myFunction(...x :[number, string]) {
    console.log(x);
}
myFunction(1, '2');

// 4. array 합칠 때 '...'
//  4-1. '...' spread 연산자의 타입은 rest parameter와 유사한 방법으로 지정
let arr1 = [1, 2, 3];
let arr2 :[...number[], number, number] = [...arr1, 4, 5];
console.log(arr2);

// (참고 1) tuple 활용 연습
let test1 :[string, number, boolean] = ['아메리카노', 4000, true];

let test2 :[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

function test3(...x :[string, boolean, ...(number | string)[]]) {
    console.log(x);
}
test3("hi", true, 1, '2', 3, '4', '5');

function test4(...x :(string|number)[]) {
    let result :[string[], number[]] = [[],[]];

    x.forEach((a)=>{
        if (typeof a === 'string') {
        result[0].push(a)
        } else {
        result[1].push(a)
        }
    })
    return result; 
}
console.log(test4('b', 5, 6, 8, 'a'));