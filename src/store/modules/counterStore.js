import { createSlice } from "@reduxjs/toolkit";

const consterStore = createSlice({
    name: 'counter',
    // 初始化 state
    initialState: {
        count: 0
    },
    // 修改状态，同步方法
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        addToNum(state, action) {
            state.count += action.payload
        }
    }
})

const { increment, decrement, addToNum } = consterStore.actions
const reducer = consterStore.reducer

export { increment, decrement, addToNum }
export default reducer