// Union Type, Any, Unknown

// 1. Union Type : 2개 이상의 타입을 합친 새로운 타입 → |(or) 기호 사용
//  1-1. 일반 변수
let var1 :(number | string | boolean) = 123; // → 용도에 따라 가변적인 타입을 가짐
//  1-2. array / object 자료형
let arr1 :(string | number)[] = [1, '2', 3];
let obj1 :{a : string | number} = { a : '123' };

// 2. Any Type : 모든 자료형을 허용 → 타입 해제 문법... 일반 JS 변수로 만들고 싶을 때 사용
let any1 :any;
any1 = 123;
any1 = [];
any1 = '123';

// 3. Unknown Type : 모든 자료형을 허용
// → any 보다 안전한 이유는? 
let unk1 :unknown;
unk1 = 123;
unk1 = {};
// let unk2 :string = unk1; // → unk2에 string 타입이 지정되어 있으므로 에러 발생

// (참고 1) ※※※ 타입스크립트는 간단한 수학 연산도 타입이 일치해야 함 ※※※
// unk1 - 1; → unknown은 number 타입이 아님

let var2 :string | number;
// var2 + 1; → string 타입 + 1(가능), number 타입 + 1(가능), string|number 타입 + 1(불가)

let unk3 :unknown = 1;
// unk3 - 1; → 값이 숫자여도 unknown 타입이므로 연산 불가

// (참고 2) 타입 지정 연습
let user :string = 'kim';
let age :undefined | number = undefined;
let married :boolean = false;
let john :(string | undefined | number | boolean)[] = [user, age, married];

let school : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee', school.teacher];