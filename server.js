const express = require('express');
const morgan = require('morgan');
const exec = require('child_process').exec;

exec('ss -tn src :8766 | grep -q :8766; echo $?', (err, stdout, stderr) => {
	if (parseInt(stdout) === 0) {
		console.log('SS13 is up');
		exec('ss -tn src :8766 | expr $(wc -l) - 1', (err, stdout, stderr) => {
			console.log(`There are ${parseInt(stdout)} players connected.`);
		});
	}
});
