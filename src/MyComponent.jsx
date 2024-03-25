import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("GYEST");
    const [count, setCount] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);
    
    const updateName = () => {
        setName("newtan")
    }

    const updateAge = () => {
        setCount(count + 1)
    }

    const toggleEmployment = () => {
        setisEmployed(!isEmployed)
    }

    return (<div>
                <p>Name : {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age : {count}</p>
                <button onClick={updateAge}>Set Age</button>

                <p>IS Employed : {isEmployed ? "true" : "false"}</p>
                <button onClick={toggleEmployment}>Set Employed</button>
            </div>)
}

export default MyComponent;