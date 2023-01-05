// export
// 1. export 변수명
export var userName = 'kim';
export var userAge = 20;
// 2. namespace
var MyNamespace;
(function (MyNamespace) {
    ;
})(MyNamespace || (MyNamespace = {}));
var var2 = "kim";
var InterfaceNameSpace;
(function (InterfaceNameSpace) {
    ;
})(InterfaceNameSpace || (InterfaceNameSpace = {}));
var dog1 = 'bark';
var dog2 = { name: 'paw' };
