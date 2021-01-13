function pollAllServers() {
	return fetch('/api/servers/', {
		method: 'GET',
		headers: new Headers({ 'Content-Type': 'application/json'})
	}).then(res => {
		if(res.ok) return res.json();
		throw new Error('Polling Error');
	});
}

function pollServer(id) {
	return fetch(`/api/servers/${id}`, {
		method: 'GET',
		headers: new Headers({ 'Content-Type': 'application/json'})
	}).then(res => {
		if(res.ok) return res.json();
		throw new Error('Polling Error');
	});
}

export default {
	pollAllServers,
	pollServer
}
