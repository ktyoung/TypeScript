// import export

// 1. import {변수명} from '경로'
import { userName, userAge, Type, Car, Bike, ObjFunction } from "./a";

console.log(userName, userAge);
let var1 :Type = 'park';

// 2. namespace (import export 과거 버전)
//  2-1. TypeScript 타입 변수를 숨기는 문법

// (참고 1) import 옛날 방식
// /// <reference path="./a.ts" />

// (참고 2) import 연습
let var3 :Car = { wheel : 4, model : "소나타" };
let var4 :Bike = { wheel : 2, model : "시티" };

let objFunction :ObjFunction = function objFunction(a) {
    console.log(a);
}