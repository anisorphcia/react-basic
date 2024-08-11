import { createContext, useContext } from "react";

const MsgContext = createContext();

function A() {
    return (
        <div>
            <h3>this is A component</h3>
            <B/>
        </div>
    )
}

function B() {
    const msg = useContext(MsgContext)
    return (
        <div>
            <h3>this is B component</h3>
            accept data : {msg}
        </div>
    )
}

function CrossComponent() {
  const msg = "top data";
  return (
    <div>
        <h2>cross component transform data</h2>
      <MsgContext.Provider value={msg}>
        this is CrossComponent
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default CrossComponent;
