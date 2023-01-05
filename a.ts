// export

// 1. export 변수명
export var userName :string = 'kim';
export var userAge :number = 20;
//  1-1. 타입도 export 가능
export type Type = string;

// 2. namespace
namespace MyNamespace {
    export type Name = string | number;
    export interface myInterface { age : number };
}
let var2 :MyNamespace.Name = "kim";

// 3. interface 등도 export 가능
export interface myInterface {}

// (참고 1) export 연습
export type Car = {
    wheel : number,
    model : string
}
export interface Bike {
    wheel : 2,
    model : string
}



export type ObjFunction = (a? :object) => void;


namespace TypeNamespace {
    export type Dog = string;
}
namespace InterfaceNameSpace {
    export interface Dog { name : string };

}

let dog1 :TypeNamespace.Dog = 'bark';
let dog2 :InterfaceNameSpace.Dog = { name : 'paw' }