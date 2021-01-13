const express = require('express');
const morgan = require('morgan');
const exec = require('child_process').exec;
const dotenv = require('dotenv').config({ path: './.env.local' });
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const app = express();
const PORT = 8180;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/servers', require('./routes/api/servers'));

const server = app.listen(PORT, () => {
	console.log(`Express listening on port:${PORT}`);
});

/*function checkServerNet() {
	const serverList = buildServerList();
	serverList.forEach((server) => {
        	exec(`ss -tuna src :${server[1]} | grep -q :${server[1]}; echo $?`, (err, stdout, stderr) => {
			if (parseInt(stdout) === 0) {
        	             exec(`ss -Htun src :${server[1]} | wc -l`, (err, stdout, stderr) => {
				     console.log(`${server[0]} is up`);
				     console.log(`There are ${parseInt(stdout)} players connected.`);
			     });
        	     	} else {
			     console.log(`${server[0]} is down`);
			}
	        });
	});
}

checkServerNet();
*/


