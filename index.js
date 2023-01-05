// 접근제한자 활용 연습
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.addOne = function (num) {
        Test.x = Test.x + num;
    };
    Test.prototype.printX = function () {
        console.log(Test.x);
    };
    Test.x = 10;
    Test.y = 20;
    return Test;
}());
var test = new Test();
test.addOne(3);
test.addOne(4);
test.printX();
var Square = /** @class */ (function () {
    function Square(x, y, color) {
        this.width = x;
        this.height = y;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var rand = Math.random();
        var newDiv = document.createElement("div");
        newDiv.style.width = this.width + "px";
        newDiv.style.height = this.height + "px";
        newDiv.style.backgroundColor = this.color;
        newDiv.style.position = "relative";
        newDiv.style.top = rand * 400 + "px";
        newDiv.style.left = rand * 400 + "px";
        document.body.appendChild(newDiv);
    };
    return Square;
}());
var square = new Square(30, 30, "red");
for (var i = 0; i < 8; i++) {
    square.draw();
}
