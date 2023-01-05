// protected, static

// 1. protected 키워드
//  1-1. private 키워드와 유사함 → 클래스 안에서만 사용, 수정 가능
class User1 {
    protected x :number = 10;
}
//  1-2. 차이점? 상속된 클래스에서도 사용 가능 (private는 상속해도 사용 불가)
//  1-3. extends 된 class는 사용 가능, 자식들 사용 불가능
class NewUser extends User1 {
    doThis() {
        this.x = 20;
    }
}

// 2. static 키워드
//  2-1. 부모 class에 직접 부여되는 키워드(자식에게 물려주지 않음) → 부모 클래스에서만 사용 가능
class User2 {
    static x :number = 10;
    // 2-2. private / protected / public + static 가능
    private static y :number = 20;
}

let child = new User2();
// console.log(child.x); → 오류 발생
console.log(User2.x);

// 3. 접근제한자 활용 예시
class User3 {
    static skill :string = 'js';
    intro :string = User3.skill + ' 전문가입니다.';
}

let user_3 = new User3();
console.log(user_3);

User3.skill = "ts"; // → 이후 자식들은 ts skill을 가짐

let user_4 = new User3();
console.log(user_4);