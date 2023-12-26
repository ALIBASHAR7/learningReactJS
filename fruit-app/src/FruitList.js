import { useEffect, useState } from "react";

const FruitList = () => {
  // let fruits = ["Mango","Orange","Apple"];
  // fruits.push("Dragon fruit");

  const [fruits, setFruits] = useState([]);

  const [taste,setTaste]= useState([]);

  useEffect(() => {
    // console.log("Use Effect Executed", fruits);
  }, [fruits]);

  const [input, setInput] = useState("");

  const onClickHandler = () => {
    // console.log("CLicked", input)
    // fruits.push(input);
    setFruits([...fruits, input]);
    console.log(fruits);
    setInput(" ");
  };

  return (
    
    <div>
      <input className=" m-3 px-1 py-1 border-black rounded-md border-2 border-spacing-10" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Fruits name"/>{" "}
      <button className=" m-3 px-10 py-1  bg-blue-600 rounded-md text-white " onClick={onClickHandler}> Add </button>
      {/* <input className=" m-3 px-1 py-1 border-black rounded-md border-2 border-spacing-10" value={input} onChange={(e) => setTaste(e.target.value)} placeholder="Enter Fruits Taste"/>{" "}
      <button className=" m-3 px-10 py-1  bg-blue-600 rounded-md text-white " onClick={onClickHandler}> Add </button> */}

      {fruits.length > 0 ? (
        <div className =" border-black border-spacing-8">
          <h2 className=" border m-2 p-2"> This is my Fruit List :</h2>
          <ul className="m-3 p-2" >
            {fruits.map((g) => (

                <li>
                {g}
                </li>
                  ))}
              {taste.map((a)=>(
                <li> 
                  {a}
                </li> 
              ))}

          </ul>
        </div>
      ) : (
        <div className=" p-2 border-black text-red-500"> No fruits </div>
      )}
    </div>
  );
};

export default FruitList;
