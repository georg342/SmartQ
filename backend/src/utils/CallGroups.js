const lg = require('../utils/ListGroups.js');
const state = require('./state');

const content = state.load();

function call(database){
    const gpc = content.attractions[(state.indexAttraction(database))].gpc;
    const listGroups = lg.list(database);
    listGroups.then(groups => {
        for (let i = 0; i < gpc; i++) {
        console.log(groups[i])
        }
    });
}

module.exports = {
    call
}