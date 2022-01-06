import React from 'react';

const UserCard = (props) => {
	
	return(
		<div className='ui card'>
			<div className='content'>
				<div className='header' style={{backgroundColor: 'yellow'}}>Alex Tancredi</div>
				<div className='description'>
					{ props.children }
				</div>
			</div>
			<div className='ui bottom button'>
				<i className='add icon'>
				Add Friend
                </i>
			</div>
		</div>
	)

}

export default UserCard;