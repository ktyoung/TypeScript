import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

// Redux + TypeScript
// (참고 1) React에서 Redux 사용하는 이유?
// 1. 모든 컴포넌트가 state 공유 가능
// 2. 수정 방법을 파일 한 곳에 정의해둠
// 3. 버그 수정이 쉬워짐


// === 전통방식 redux === //
// 1. 변수와 함수에 타입 지정
const initialState :{count :number}  = { count: 0 };
// 2. action 타입 지정
//  2-1. 컴포넌트에서 dispath() 요청할 때 넣는 파라미터의 타입
function reducer(state = initialState, action :any) {
  if (action.type === '증가') {
    return { count : state.count + 1 }
  } else if (action.type === '감소'){
    return { count : state.count - 1 }
  } else {
    return initialState
  }
}

const store = createStore(reducer);

// 3. store의 타입 미리 export 해두기 
//  3-1. store 타입이 자동으로 저장됨
export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
) 