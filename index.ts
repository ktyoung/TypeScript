// public, private

// 1. public 키워드
class User1 {
    //  1-1. public 키워드가 붙으면 모든 자식들이 이용 가능
    //  1-2. public 키워드는 항상 생략되어 있음
    public name :string;

    constructor(str :string) {
        this.name = str;
    }
    // 1-3. 함수에도 public 키워드 사용 가능
    public myFunction() {

    }
}
let user_1 = new User1('park');
user_1.name = "park";

// 2. private 키워드
class User2 {
    //  2-1. private 키워드가 붙으면 class 안에서만 수정, 이용 가능
    name :string;
    private familyName :string = "Kim"; // → familyName은 사용자가 임의로 변경하면 안 되는 변수

    constructor(str :string) {
        this.name = this.familyName + str;
    }

    //  2-2. 자식들이 familyName을 바꾸고 싶으면? → 수정 함수 작성 후 자식들이 사용
    changeName() {
        this.familyName = "park";
    }
}

let user_2 = new User2('Minsu');
console.log(user_2);
// console.log(user_2.familyName); → familyName 속성 사용 불가
user_2.changeName(); // → 수정 함수로 private 속성인 familyName을 수정함
console.log(user_2);

// 3. public 키워드 쓰면 this 키워드 생략 가능
class Person {
    constructor(public name :string) { // → 여기에 입력된 파라미터는 자식의 name 속성에 기입

    }
}

let person = new Person('kim');
console.log(person);