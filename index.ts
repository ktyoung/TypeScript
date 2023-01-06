// d.ts 파일
// 1. ts 파일에 타입 정의가 너무 길면 d.ts 파일을 생성하기도 함

// 2. .d.ts 파일을 사용하려면 import 후 사용
//  2-1. import/export할 타입이 많으면 namespace 또는 'import * as 이름' 사용
// import {Age} from './types/common/test'; → 글로벌 모듈로 사용하면 import 필요 없음
let age :Age = 30;

// 3. d.ts파일은 글로벌 모듈이 아님
//  3-1. export하거나,
//  3-2. tsconfig.json에 "typeRoots": ["타입폴더명"] 속성 추가 
//       → "타입폴더명"에 있는 타입들은 글로벌하게 이용 가능

// 4. 외부 라이브러리를 사용할 때 타입 정의가 되어있지 않다면
//  4-1. DefinitelyTyped repository 참고하거나,
//  4-2. install하여 사용
$().append();

// (참고 1) tsconfig.json에 "declaration": true 설정하면 저장할 때 자동으로 .d.ts 파일 생성
// 1. 자동 생성된 파일을 직접 수정하면 안 됨(참고용으로 사용)
let userName :string = "김";

// (참고 2) d.ts파일 용도?
// 1. 타입 정의를 따로 보관할 파일이 필요할 때 사용
// 2. 타입 레퍼런스를 생성하고 싶을 때 사용