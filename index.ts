// object index signatures

// 1. index signatures
//  1-1. 모든 속성의 타입을 한 번에 지정 가능
interface StringOnly {
    [key :string] :string, // → 모든 문자로 된 속성은 string 타입을 가짐
    // age :number, // → age 속성은 string 타입이므로 에러 발생
}

//  1-2. 속성 이름이 숫자인 경우에도 사용 가능
//   1-2-1. 속성 이름이 숫자여도 object에서 문자화가 되기 때문에 에러가 발생하지 않음
let user :StringOnly = {
    0 : "kim",
    1 : "20",
    2 : "seoul"
}

// 2. 중첩 object 자료형 타입 지정은?
//  2-1. recursive하게 타입 만들기
interface CssType {
    'font-size' :CssType | number // → == { 'font-size' : CssType }
}

let css :CssType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

// (참고 1) object index signatures 연습
interface ObjType1 {
    [key :string] :string | number
}
let obj1 :ObjType1 = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}


interface ObjType2 {
    [key :string] :number | ObjType2,
    'font-size' : number
}
let obj2 :ObjType2 = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
  }