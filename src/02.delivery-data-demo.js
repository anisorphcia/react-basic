import { useState } from "react";

function Son(props) {
  // 传入过来的数据只能由父组件进行修改
  console.log("son", props);
  const toFatherMsg = "this is son data";
  return (
    <div>
      <div>
        <div>show props data: {props.name}</div>
        <div>show tag: jsx: {props.child}</div>
        <div>show tag content： {props.children}</div>
      </div>
      <button onClick={() => props.onGetSonMsg(toFatherMsg)}>
        send to father
      </button>
    </div>
  );
}

function Father() {
  const name = "delivery data ....xxx1";
  let age = 99;
  let isMale = true;

  const [msg, setMsg] = useState('')
  const getMsg = (msg) => {
    setMsg(msg)
    console.log("son to fater", msg);
  };
  return (
    <div>
      <h2>父子传值</h2>
      <Son
        name={name}
        age={age}
        isMale={isMale}
        list={["item1", "item2"]}
        obj={{ a: "aaaa" }}
        onGetSonMsg={getMsg}
        child={<span>show span</span>}
      >
        <span>this is span title</span>
      </Son>
      <div> son to fater data show: {msg}</div>
    </div>
  );
}

export default Father;
