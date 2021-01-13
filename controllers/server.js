const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const readline = require('readline');

module.exports = {
	pollAllServers,
	pollServer
}

const SERVER_DIR = process.env.SERVER_DIR;
let serverList = [];

function buildMasterList() {
	console.log('Building List');
        fs.readdirSync(SERVER_DIR).forEach(file => {
                if(fs.lstatSync(path.resolve(SERVER_DIR, file)).isDirectory()) {
                        var serverPair = {};
                        serverPair.name = file
                        fs.readdirSync(SERVER_DIR + file).forEach(subFile => {
                                if(subFile === '.port'){
                                        var port = fs.readFileSync(SERVER_DIR + file + '/' + subFile, 'utf-8').trim();
                                        serverPair.port = port;
                                }
                        });
                       	serverList.push(serverPair);
                }
        });
	checkServerConns();
	return;
}

function checkServerConns() {
        serverList.map((server) => {
                let serverActive = execSync(`ss -tuna src :${server.port} | grep -q :${server.port}; echo $?`, {encoding: 'utf-8'}).trim();
		if (parseInt(serverActive) === 0) {
                        let players = execSync(`ss -tun src :${server.port} | wc -l`, {encoding: 'utf-8'}).trim();
			server.isUp = true;
			server.players = players - 1;
		} else {
			server.isUp = false;
                }
            
        });
}

function pollAllServers(req, res) {
	if(!serverList.length) {
		buildMasterList();
	}
	res.json(serverList);
}

function pollServer(req, res) {
	if(!serverList.length) {
		buildMasterList();
	}
	const server = serverList.find(({name}) => name === req.params.name);
	res.json(server);
}
