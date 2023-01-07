// 조건문으로 타입만들기 & infer

// 1. 삼항연산자로 타입 만들기
//  1-1. type if문은 삼항 연산자로
//  1-2. 조건식은 extends 키워드 사용
type Age<T> = T extends string ? string : unknown;
let var1 :Age<string>; // → string 타입
let var2 :Age<number>; // → unknown 타입

type FirstItem<T> = T extends any[] ? T[0] : any;
let var3 :FirstItem<string[]>;
let var4 :FirstItem<number>;

// 2. infer 키워드
//  2-1. 타입을 왼쪽에서 추출하는 기능
type Person<T> = T extends infer R ? R : unknown;
//  2-2. T에서 타입을 추출해서 R 변수에 담음
type NewPerson = Person<string>

// 3. 함수의 return 타입만 추출하려면...
//  3-1. ReturnType 기본 함수 사용하면 됨
type NewType = ReturnType< () => number >;

// (참고 1) infer 키워드 예시
// 1. array 내부의 타입만 추출하기
//  1-1. string[] extends (infer R)[] 
//       → R은 string 타입
type TypeExtraction<T> = T extends (infer R)[] ? R : unknown;
type ArrType = TypeExtraction<string[]>; // → NewType은 string 타입

// 2. 함수의 return 타입 추출
//  2-1. 틀린그림찾기처럼 타입을 추출함... infer와 같은 위치에 있는 타입을 R 변수에 담음
type FuncExtraction<T> = T extends ( () => infer R ) ? R : unknown;
//  2-2. () => void extends ( () => infer R ) 이므로 같은 위치에 있는 void 타입을 R 변수에 담음
type FuncType = FuncExtraction< () => void >;



// (참고 2) 조건문 타입 & infer 활용 연습
type MyType<T> = T extends [string, ...any] ? T[0] : unknown;
let age1 :MyType<[string, number]>;
let age2 :MyType<[boolean, number]>;


type TestType<T> = T extends ( (x: infer R) => any ) ? R : any;
type type1 = TestType<(x :number) => void>;
type type2 = TestType<(x :string) => void>;