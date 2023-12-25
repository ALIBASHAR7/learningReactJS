import { useEffect, useState } from "react";

const FruitList = () => {
    // let fruits = ["Mango","Orange","Apple"];

    // fruits.push("Dragon fruit");


    const [fruits, setFruits] = useState([]) 

    useEffect(() => {
        console.log("Use Effect Executed", fruits);
    }, [fruits]);

    const [input, setInput] = useState("");

    const onClickHandler = () => {
        // console.log("CLicked", input)
        // fruits.push(input);
        setFruits([...fruits, input])
        console.log(fruits)
    }

    return (
        <div>
            {fruits.length > 0 ? (
                <div>
                <h2> This is my Fruit List</h2>
                <ol>
                    {fruits.map(f => (
                        <li> {f} </li>
                    ))}
                    
    
                </ol>
                
    
            </div>
            ) : (
                <div> No fruits </div>
            )}

            <input value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={onClickHandler}> Add </button>
        </div>
    )
}

export default FruitList;