// Never Type

// 1. function return 값에 붙일 수 있는 never type
//  1-1. return 값이 없어야 함
//  1-2. endpoint가 없어야 함(함수 실행이 끝나지 않아야 함)
function func1() :never {
    // 1-3. 함수 실행이 끝나지 않는 경우?
    // 1-3-1. 에러 발생
    throw new Error() // → 강제 에러 발생... 코드 실행 중단됨
    // 1-3-2. 무한 반복
    while(true) {/*...*/}

    // return undefined; → 함수는 기본적으로 이 return 값을 가지고 있다.
}

// 2. never 타입 사용 방법?
//  2-1. 대체로 쓸 곳이 없음. void 타입으로 대체 가능하기 때문.

// 3. never 타입은 코드를 이상하게 구현하면 출몰
//  3-1. 이상한 narrowing
function func2(parameter :string) {
    if (typeof parameter === "string") {
        console.log(parameter);
    } else {
        // 굳이 할 필요 없는 narrowing
        console.log(parameter); // → parameter의 타입이 never가 됨
    }
}

//  3-2. 어떤 함수 표현식은 return 타입이 자동으로 never
let func3 = function() { // → func3의 타입이 never가 됨
    throw new Error()
}