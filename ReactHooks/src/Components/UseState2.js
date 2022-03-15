import React, { useState } from "react";

const UseState2 = () => {
	let Value = "Gaurav Gupta";

	const [value, setValue] = useState(Value);

    const onchange = (event) => {
        // console.log(event.target.value)
        setValue(event.target.value);

    }

	return (
		<div className='container '>
			<input type='text' placeholder='enter something here...' className='' 
                onChange = {onchange}
            />
			<span>{value}</span>
		</div>
	);
};

export default UseState2;
