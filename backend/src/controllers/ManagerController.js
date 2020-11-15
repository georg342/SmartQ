const connection = require('../database/connection');
const pr = require('../utils/PastRounds')
const cg = require('../utils/CallGroups.js');

module.exports = {
    async add(req, res){
        const database = (req.path).slice(((req.path).lastIndexOf('/')+1));
        const callGroups = pr.add(database);
        
        if (callGroups) {
            cg.call(database);
        }
        
        return res.json();
    }
};