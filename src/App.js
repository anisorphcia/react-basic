import { useSelector, useDispatch } from "react-redux";
import RefDemo from "./01.useRef-demo";
import Father from "./02.delivery-data-demo";
import Bridge from "./03.delivery-data-bro-demo";
import CrossComponent from "./04.delivery-data-ctx";
import UseEffectDemo from "./05.useEffect-demo";
import CustomHook from "./06.custom-hook-demo";
import { increment, decrement } from "./store/modules/counterStore";

function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      {/* <RefDemo />
      <Father />
      <Bridge />
      <CrossComponent />
      <UseEffectDemo />
      <CustomHook /> */}
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
