import React from "react";
import { Card } from "../../Components/Style";
import "./style.css"

const Congrats = (props) => {
	// console.log(props.message.msg)
	const { msg, text } = props.message;
	return (
		<>
			<Card>
				<div className="congrats-box">
					<h2>{msg}</h2>
					<p>{text}</p>
				</div>
			</Card>
		</>
	);
};

export default Congrats;
