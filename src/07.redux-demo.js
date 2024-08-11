import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannelList } from "./store/modules/channelStore";
import { useEffect } from "react";

function ReduxDemo() {
    const { count } = useSelector(state => state.counter)
    const { channelList } = useSelector(state => state.channel)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchChannelList())
    }, [dispatch])
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(addToNum(10))}>+10</button>
            <button onClick={() => dispatch(addToNum(20))}>+20</button>
            <ul>
                {channelList.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>

    )
}

export default ReduxDemo