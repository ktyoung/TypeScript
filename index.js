// 타입스크립트 기본 타입(primitive types) 정리
// 1. 변수 타입 지정
var user = 'kim';
// user = 123; → 타입 변경 시 에러 발생
var age = 22;
var marriage = true;
// undefined, null 타입도 있음
// 2. array 타입 지정
var arr = ['kim', 'park'];
// 3. object 타입 지정
var obj = { member1: 'kim', member2: 'park' };
// 타입스크립트는 타입 지정을 자동으로 함
var var1 = 'hello'; // → string 타입으로 자동 지정
// var1 = 100; → 에러 발생
var favMusic = { artist: '윤하', title: '오르트 구름' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    stated: true
};
