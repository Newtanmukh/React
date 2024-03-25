import React,{useState} from "react";

function Counter(){
    const[count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    } 

    const deccrement = () => {
        setCount(count - 1);
    } 

    const reset = () => {
        setCount(0);
    } 

    return (<div className="counter-container">
                <p className="counter-display"> Count is :  {count} </p>
                <button className="counter-button" onClick={increment}>INCREMENT</button>
                <button className="decrement-button" onClick={deccrement}>DECREMENT</button>
                <button className="reset-button" onClick={reset}>RESET</button>
            </div>)
}

export default Counter;