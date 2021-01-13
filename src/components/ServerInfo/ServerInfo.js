import React from 'react';

import './ServerInfo.css';

const ServerInfo = ({server}) => {
	return (
		<div key={server.port} className='server'>
			<h2>{server.name}</h2>
			<div>Port: {server.port}</div>
			{server.isUp ? (<div><div>Online</div><div>Players: {server.players}</div></div>) : (<div>Offline</div>)}
		</div>
	);
};

export default ServerInfo;
