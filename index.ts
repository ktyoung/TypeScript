// 접근제한자 활용 연습
class Test {
    private static x :number = 10;
    public static y :number = 20;

    addOne(num :number) {
        Test.x = Test.x + num;
    }
    printX() {
        console.log(Test.x);
    }
}

let test = new Test();
test.addOne(3);
test.addOne(4);
test.printX();


class Square {
    width :number;
    height :number;
    color :string;

    constructor(x :number, y :number, color :string) {
        this.width = x;
        this.height = y;
        this.color = color;
    }
    draw() {
        let rand = Math.random();
        let newDiv = document.createElement("div");

        newDiv.style.width = this.width + "px";
        newDiv.style.height = this.height + "px";
        newDiv.style.backgroundColor = this.color;
        newDiv.style.position = "relative";
        newDiv.style.top = rand*400 + "px";
        newDiv.style.left = rand*400 + "px";

        document.body.appendChild(newDiv);
    }
}
let square = new Square(30, 30, "red");
for (let i = 0; i < 8; i++) {
    square.draw();
}