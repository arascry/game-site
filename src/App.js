import React from 'react';
import './App.css';

import ServerInfo from './components/ServerInfo/ServerInfo';

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
			<div className="App">
			{!this.state.serverList ?
				(<div>Initalizing Page</div>)
				:(
					<div>
						<h1>Test Page</h1>
						{this.state.serverList.map((server) => {
							return (<ServerInfo server={server} />)
						})}
					</div>
				)
			}
			</div>
		);
	}
}

export default App;
