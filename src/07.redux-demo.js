import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { useSelector, useDispatch } from "react-redux";

function ReduxDemo() {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(addToNum(10))}>+10</button>
            <button onClick={() => dispatch(addToNum(20))}>+20</button>
        </div>

    )
}

export default ReduxDemo