import { useRef } from "react";

function RefDemo() {
  // useRef
  // ref.current 获取dom
  const inputRef = useRef(null);

  const showDom = () =>  {
    console.dir(inputRef.current)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>get dom</button>
    </div>
  );
}

export default RefDemo;
