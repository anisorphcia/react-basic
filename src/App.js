import RefDemo from "./01.useRef-demo";
import Father from "./02.delivery-data-demo";
import Bridge from "./03.delivery-data-bro-demo";
import CrossComponent from "./04.delivery-data-ctx";
import UseEffectDemo from "./05.useEffect-demo";
import CustomHook from "./06.custom-hook-demo";

function App() {
  return (
    <div>
      <RefDemo />
      <Father />
      <Bridge />
      <CrossComponent />
      <UseEffectDemo />
      <CustomHook />
    </div>
  );
}

export default App;
