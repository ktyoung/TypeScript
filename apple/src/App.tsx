import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// React + TypeScript
// 1. npx create-react-app 프로젝트명 --template typescript 
// 2. .tsx 파일은 .ts와 같지만, jsx 문법을 지원함
// 3. 알아야 하는 점
//  3-1. 일반 변수, 함수 생성 시 타입 지정
let name :string = "kim";
//  3-2. JSX 표현하는 타입(HTML 요소 타입 지정)
let box :JSX.Element = <div></div>;

function App() {

  //  3-6. state 타입 지정
  let [user, setUser] = useState('kim'); // → 자동으로 타입 지정을 해줌
  let [age, setAge] = useState<string | number>(20); // → 2개의 타입을 지정할 때는 Generic 문법 사용

  return (
    <div>
      <h4>안녕하세요, {name}</h4>
      <Profile name="철수"/>
    </div>
  );
}

//  3-3. 컴포넌트 타입 지정(파라미터와 리턴값)
//  3-4. 컴포넌트 props 타입 지정 → props는 object 자료형으로 담김
//  3-5. type alias도 당연히 가능함
function Profile(props :{name :string}) :JSX.Element {
  return (
    <div>{props.name}의 프로필입니다.</div>
  );
}

export default App;
