import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './index';
import { RootState2, increment, decrement, incrementByAmount } from './index2';
import { Dispatch } from 'redux';


// Redux + TypeScript
// (참고 1) React에서 Redux 사용하는 이유?
// 1. 모든 컴포넌트가 state 공유 가능
// 2. 수정 방법을 파일 한 곳에 정의해둠
// 3. 버그 수정이 쉬워짐

// 1. (전통방식) 컴포넌트에서 redux에서 만든 state 사용하기
// function App() {
//   1-1. useSelector( (state) => state ) 사용
//   1-2. state 타입 지정은 RootState(index.tsx)에 정의됨
//   const output = useSelector( (state :RootState) => state )
//   1-3. dispatch 타입은 redux에서 import한 Dispatch 타입
//   const dispatch :Dispatch = useDispatch(); // → state 수정 요청
//   return (
//     <div>
//       {output.count}
//       <button onClick={ () => { dispatch({type : '증가'}) } }>버튼</button>
//     </div>
//   );
// }


// 2. (신규방식) 컴포넌트에서 redux에서 만든 state 사용하기
function App() {
  const output = useSelector( (state :RootState2) => state )
  const dispatch :Dispatch = useDispatch();
  return (
    <div>
      {/* 2-1. 전통방식과 동일하나, slice 등록 시 작명한 이름을 사용해야 함  */}
      {output.counter1.count}
      {/* 2-2. index에서 export한 수정 방법을 import 한 뒤 사용 */}
      <button onClick={ () => { dispatch(increment()) } }>버튼</button>
    </div>
  );
}

export default App;
