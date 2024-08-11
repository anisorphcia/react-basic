import { increment, decrement } from "./store/modules/counterStore";
import { useSelector, useDispatch } from "react-redux";

function ReduxDemo() {
    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>

    )
}

export default ReduxDemo