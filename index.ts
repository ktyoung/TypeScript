// 함수 rest 파라미터, destructuring 할 때 타입 지정

// 1. rest parameter?
//  1-1. 몇 개의 파라미터가 들어올 지 모를 때 사용
//  1-2. 변수명 앞에 '...' 붙이면 됨
//  1-3. rest 파라미터는 다른 일반 파라미터 뒤에만 올 수 있음
//  1-4. rest 파라미터 자리에 집어넣은 값들은 전부 [ ] 안에 담김
//       → 따라서, 타입 지정은 array 타입 지정처럼 해야함
function func1(/*num,*/ ...param :number[]) {
    console.log(param);
}
func1(1,2,3,4,5,6);

// (참고 1) ... spread operator 상식
// 괄호를 제거하는 문법
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // → [1, 2, 3, 4, 5] 출력

// (참고 2) destructuring 개념
// array, object 안에 있는 데이터를 변수로 만들고 싶을 때 사용하는 문법
let [var1, var2] = ["hi", 100];
let { student, age } :{student :boolean, age :number}  = { student : true, age : 20 };

// 2. 함수 파라미터에 destructuring
//  2-1. 항상 같은 모습의 object, array 자료가 들어올 때 쓰는 문법
function func2({student, age}) {
    console.log(student, age);
}
func2({ student : true, age : 20 });

// (참고 3) rest 파라미터, destructuring 활용 연습
function maximum(...num :number[]) {
    let max :number = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > num[i+1]) {
            max = num[i];
        }
    }
    return max;
}
console.log(maximum(6,3,7,2,5,100,20));



type ObjType = {
    user :string,
    comment :number[],
    admin :boolean
}
function objFunction({user, comment, admin} :ObjType) :void {
    console.log(user, comment, admin);
}
objFunction({ user : 'kim', comment : [3,5,4], admin : false });



type ArrType = (number | string | boolean)[];
function arrFunction([a, b, c] :ArrType) {
    console.log(a, b, c);
}
arrFunction([40, 'wine', false]);