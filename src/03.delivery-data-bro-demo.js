import { useState } from "react";

function A(props) {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = () => {
        props.onGetAName(name)
    }
    return (
        <div>
            <h3>A component</h3>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>A send to B</button>
        </div>
    );
}

function B(props) {
    return (
        <div>
            <h3>B component</h3>
            <div>show a name: {props.name}</div>
        </div>
    )
}

function Bridge() {
    const [name, setName] = useState('')
    const getAname = (name) => {
        setName(name)
    }
    return (
        <div>
            <h2>transform data between brothers</h2>
            <A onGetAName={getAname} />
            <B name={name} />
        </div>
    );
}

export default Bridge
