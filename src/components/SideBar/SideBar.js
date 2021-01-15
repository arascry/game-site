import React from 'react';

import './SideBar.css';

const SideBar = () => {
	return (
		<div className='side-bar'>
			<div className='logo'></div>
			<div className='link'><a href='/'>Home</a></div>
			<div className='link'><a href='/'>Server List</a></div>
			<div className='link'><a href='/'>Test</a></div>
		</div>
	)
}

export default SideBar;
