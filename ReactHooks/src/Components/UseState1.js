import React,{useState} from "react";

const UseState = () => {
    const [counter , setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);

    }
    
    const decrement = () => {
        setCounter(counter - 1);
    }


	return (
		<div className = "container my-4 " style={{textAlign: 'center', backgroundColor:'lightblue',width:'50%',height:'100px',margin: 'auto'}}>
			<button type='button' className='btn btn-danger' onClick = {decrement}>
				Decrement
			</button>
			<div className='counter'>{counter}</div>
			<button type='button' className='btn btn-success' onClick = {increment}>
				Increment
			</button>
		</div>
	);
};

export default UseState;
