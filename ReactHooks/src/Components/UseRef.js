import React, { useRef, useState } from "react";

const UseRef = () => {
	const [value, setValue] = useState("");

	const inputRef = useRef(null);

	const onClick = () => {
		let data = inputRef.current.value;
		setValue(data);
		console.log(data);
	};

	return (
		<div className='container '>
			<h1>useRef Hook</h1>
			<input type='text' placeholder='enter here something...' ref={inputRef} />
			<button type='button' className='btn btn-primary mx-3' onClick={onClick}>
				change Name
			</button>
			<p>{value}</p>
		</div>
	);
};

export default UseRef;
