import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
	const buttonText = { text: 'submit' };

	return(
		<div className="container " style={{ height: '100px',width:'50%',marginTop:'20px'}}>
		  <label htmlFor="name" className="label">Enter e-mail:</label>
		  <input id="name" type="text" />
		  <button >
		  	{ buttonText.text }
		  </button>
		</div>
	
	)
}

ReactDOM.render(<App /> ,document.querySelector('#root'))