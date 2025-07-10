import './App.scss'
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    const onClick = () => {
        setCount(val => val + 1);
    };
    const onChange = (event) => {
        setValue(event.target.value);
        console.log(value);
        console.log(event.target.value);
    }

  return (
    <>
        <div>
            <button onClick={onClick}>Count is {count}</button>
            <br />
            <textarea spellCheck={false}
                      value={value}
                      onChange={onChange}
                      style={{
                        resize: "none"
                      }} />
        </div>
    </>
  )
}

export default App
