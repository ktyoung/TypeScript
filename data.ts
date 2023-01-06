var c = 10;

// 1. 로컬 모듈로 변환 (import export)
export {c};

// 2. 로컬 모듈에서 글로벌 변수를 만들고 싶다면...
declare global {
    type Dog = string;
}