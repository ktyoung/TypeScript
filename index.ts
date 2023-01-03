// 타입스크립트로 HTML 변경과 조작할 때의 주의점

// 1. <h4> 텍스트 조작하기
let text = document.querySelector('#title');
// 1. narrowing 방법
//  1-1. if-else문 사용
if (text != null) {
    text.innerHTML = "반가워요";
}
//  1-2. instanceof 연산자
if (text instanceof Element) {
    text.innerHTML = "반가워요";
}
//  1-3. as 키워드(임의 타입으로 간주하기)
let text2 = document.querySelector('#title') as Element;
text2.innerHTML = "반가워요";
//  1-4. ?. → text에 innerHTML이 있으면 출력, 없으면 undefined
//       (optional chaining)
if (text?.innerHTML != undefined) {
    text.innerHTML = "반가워요";
}
//  1-5. tsconfig.json에서 strict 모드 끄기

// 2. <a> 태그의 href 속성 변경하기
let link = document.querySelector('.link');
// 1. <a> 태그에 필요한 정확한 타입명은 HTMLAnchorElement
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}

// 3. eventListener 부착하기
let button = document.querySelector('#button');
button?.addEventListener('click', function(){
    if (button instanceof HTMLButtonElement) {
        button.innerHTML = "클릭됨";
    }
})

// (참고 1) HTML 조작 연습
let image = document.querySelector('#image');
if (image instanceof Image) {
    image.src = "new.jpg";
}

let daum = document.querySelectorAll('.daum');
daum.forEach(a => {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    } 
});