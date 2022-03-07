import React from "react";
import "./User.css";
// import Pencil from '../images/pencil.png';

const User = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-5'>
					<div className='row'>
						<div className='col-3 logo-box '>
							<img
								src='https://i.ibb.co/YZWvLtc/daam.png'
								alt='daamlogo'
								className='daamlogo'
							/>
						</div>
						<h2 className='heading'>Tell Us What You Are</h2>
						<p className='para'>
							What type of user are you? Agents will <br />
							need to be approved, Creators, etc.
						</p>
					</div>
					<div className='row userTypeBody '>
						<div className=' col-3 py-2 card' >
							<div className='card-img'>
								<img src='https://i.ibb.co/pjf3L7G/real-estate.png' className='card-img-top' alt='...' />
							</div>
							<div className='card-body ' >
								<h5 className='card-title'>Agent</h5>
							</div>
						</div>
						<div className='row' style={{ display: "flex" }}>
							<div className=' col-3 py-2 card'>
								<div className='card-img '>
									<img src='https://i.ibb.co/5nTxKQy/pencil-and-brush-crossed.png' className='card-img-top' alt='...' />
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Creator</h5>
								</div>
							</div>
							<div className='col-3 py-2 card'>
								<div className='card-img '>
									<img src='https://i.ibb.co/tsd70SR/collector-1.png' className='card-img-top' alt='...' />
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Collector</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='row createAccount'>
						<button type='submit' className='btn btn-dark my-5'>
							Create Account
						</button>
					</div>
				</div>

				<div className='col-6'>
					<div className='image'>
						<img src='https://i.ibb.co/481XhQ5/daamImg.png' alt='image' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default User;
