// 함수 타입 지정, void 타입

// 1. 함수 타입 지정
//                  ↓ 파라미터 타입 지정
//                           ↓ return 값 타입 지정
function func1(x :number) :number { // 파라미터 타입과 return 값의 타입이 number인 함수
    return x * 2;
}
func1(30);

// 2. void 타입 : return 값이 없을 때 사용 → return 값이 생기면 에러 발생
function func2() :void {
    1 + 1;
}

// (참고 1) JS와 다른 점?
// 1. 타입이 지정된 파라미터는 반드시 사용해야 함
// func1(); → 에러 발생

// 2. 파라미터가 옵션일 경우? → 파라미터변수? :타입
// (변수? :number) == (변수 :number | undefined)
function func3(y? :number) {

}

// (참고 2) 함수 타입 지정 연습
function sayHello(x? :string) :void {
    if (x) {
        console.log("안녕하세요, " + x);
    } else {
        console.log("이름이 없습니다.");
    }
}

function len(y :string | number) :number {
    return y.toString().length;
}

function marry(income :number, house :boolean, charm :string) {
    let score :number = 0;
    
    score = score + income;
    if (house) {
        score = score + 500;
    };
    if (charm == "상") {
        score = score + 100;
    };

    if (score >= 600) {
        return "결혼 가능";
    };

}

console.log(marry(700, false, '중'));