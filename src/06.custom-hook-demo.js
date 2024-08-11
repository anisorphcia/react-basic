import { useState } from "react";

function useToggle(){
    const [value, setValue] = useState(true)
    function toggle(){
        setValue(!value)
    }
    return {
        value,
        toggle
    }
}

function CustomHook(){
    const {value, toggle} = useToggle()
    return (
        <div>
            <h2>Custom Hook</h2>
            {value && <div>this is a div</div>}
            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default CustomHook