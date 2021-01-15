import React from 'react';
import './App.css';

import SideBar from './components/SideBar/SideBar';
import ServerBar from './components/ServerBar/ServerBar';

import serverService from './utils/serverService';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			serverList: null
		}
	}
	async componentDidMount() {
		const response = await serverService.pollAllServers();
		try {
			this.setState({ serverList: response });
		} catch (err) {
			console.log(err);
		}

	}
	render() {
 		return (
			<div className='App'>
				<h1>Server List</h1>
				{!this.state.serverList ?
					(<div>Initalizing Page</div>)
					:(
						<div className='main-container'>
							<SideBar />
							<ServerBar serverList={this.state.serverList} />
						</div>
					)
				}
			</div>
		);
	}
}

export default App;
