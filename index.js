// object index signatures
//  1-2. 속성 이름이 숫자인 경우에도 사용 가능
//   1-2-1. 속성 이름이 숫자여도 object에서 문자화가 되기 때문에 에러가 발생하지 않음
var user = {
    0: "kim",
    1: "20",
    2: "seoul"
};
var css = {
    'font-size': {
        'font-size': {
            'font-size': 14
        }
    }
};
var obj1 = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
var obj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
