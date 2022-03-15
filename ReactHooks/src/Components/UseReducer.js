import React, { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1, showText: state.showText };
		case "DECREMENT":
			return { count: state.count - 1, showText: state.showText };
		case "ToggleShowText":
			return { count: state.count, showText: !state.showText };
		default:
			return state;
	}
};

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true});

	return (
		<div className='container'>
			<h2>{state.count}</h2>
			<button
				className='btn btn-primary'
				onClick={() => {
					dispatch({ type: "INCREMENT" });
					dispatch({ type: "ToggleShowText" });
				}}
			>
				Increment
			</button>
            
			<button
				type='button'
				className='btn btn-danger'
				onClick={() => {
					dispatch({ type: "DECREMENT" });
					dispatch({ type: "ToggleShowText" });
				}}
			>
				Decrement
			</button>
			{state.showText && <p>Text is toggling</p>}
		</div>
	);
};

export default UseReducer;
