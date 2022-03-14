import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h2>Contact Us</h2>
				<p>Swing by for a cup of coffee, or leave us a message:</p>
			</div>
			<div className='row'>
				<div className='column'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d937149.6460760989!2d71.48423192187502!3d23.43372844838423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1647274006440!5m2!1sen!2sin'
						width='600'
						height='450'						
					></iframe>
				</div>
				<div className='column'>
					<form action='/action_page.php'>
						<label htmlFor='fname'>First Name</label>
						<input
							type='text'
							id='fname'
							name='firstname'
							placeholder='Your name..'
						/>
						<label htmlFor='lname'>Last Name</label>
						<input
							type='text'
							id='lname'
							name='lastname'
							placeholder='Your last name..'
						/>
						<label htmlFor='country'>Country</label>
						<input type = 'text'/>
					<label htmlFor='subject'>Subject</label>
						<textarea
							id='subject'
							name='subject'
							placeholder='Write something..'
							style={{ height: "170px" }}
							defaultValue={""}
						/>
						<input type='submit' defaultValue='Submit' />
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
