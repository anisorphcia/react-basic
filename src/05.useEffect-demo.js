import { useEffect, useState } from "react";

const url = "http://geek.itheima.net/v1_0/channels";

function UseEffectDemo() {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([]);
    // useEffect 第一个参数是回调函数，第二个参数是依赖项（3种情况）
    // 1.没有依赖项：初始化执行 + 组件更新执行
    // 2.空数组依赖：初始化执行
    // 3.特定依赖项：初始化执行 + 依赖项变化时执行
    useEffect(() => {
        async function getList() {
            const res = await fetch(url);
            const jsonList = await res.json();
            setList(jsonList.data.channels);
        }
        console.log('1111') // 设置特定依赖项时，会重复执行
        getList();
        return() => {
            // 卸载 副作用
            // todo sth
        }
    }, [count]);
    return (
        <div>
            <h2>useEffect</h2>
            <button onClick={() => setCount(count + 1)}>rerender + {count}</button>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseEffectDemo;
