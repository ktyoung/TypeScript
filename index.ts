// declare & ambient module
import {c} from './data';

// 1. 외부 파일 이용 시 declare
//  1-1. declare 문법은 이미 정의된 변수나 함수를 재정의할 수 있음
declare let a :number;

// 2. ts파일 → ts파일로 변수를 가져와 사용하려면 
//  2-1. ts의 특징? 모든 ts 파일은 자동으로 ambient module(글로벌 모듈)이 됨
//       → 모든 ts파일에서 사용 가능함
//  2-2. ts 파일을 로컬 모듈로 생성하려면 import export 문법 사용
console.log(c + 1);