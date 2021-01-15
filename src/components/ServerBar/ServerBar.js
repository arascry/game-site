import React from 'react';

import ServerInfo from '../ServerInfo/ServerInfo';

import './ServerBar.css';

const ServerBar = ({serverList}) => {
	return (
		<div className='server-container'>
        		{serverList.map((server) => {
                		return (<ServerInfo server={server} />)
			})}
		</div>
	)
}

export default ServerBar;
