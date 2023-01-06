import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


// === 신규방식 redux === //
// 1. @reduxjs/toolkit 설치
//  1-1. npm install @reduxjs/toolkit 
//  1-2. 타입 지정은 변수/함수 만들 때 지정
const initialState = { count: 0, user : 'kim' };

const counterSlice = createSlice({
  // 2. state, reducer(데이터 수정 방법)를 object로 정리한다는 점이 다름
  name: 'counter',
  initialState : initialState,
  // 3. reducer 문법
  //    3-1. 함수 형태라 보기 좋음
  //    3-2. state 수정 시 사본 만들 필요가 없음 (직접 수정 가능)
  reducers: {
    increment (state){  // → 파라미터는 타입 지정을 할 필요 없음(자동)
      state.count += 1
    },
    decrement (state){
      state.count -= 1
    },
    //  3-3. action 타입 지정은 PayloadAction<타입> (import 필요)
    incrementByAmount (state, action :PayloadAction<number>){
      state.count += action.payload
    }
  }
})

// 4. store 완성하기
//  4-1. state와 reducer를 합친 것을 slice라 부름
let store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer
  }
})

// state 타입을 export 하는 문법. 나중에 쓸 데가 있음
export type RootState2 = ReturnType<typeof store.getState>

// 수정 방법 export
export let {increment, decrement, incrementByAmount} = counterSlice.actions