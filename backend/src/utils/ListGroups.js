const connection = require('../database/connection');
const state = require('./state');

async function list(database) {
    const content = state.load();
    const attraction = content.attractions[(state.indexAttraction(database))];
    const seats = attraction.seats;
    const queue = (await connection(database).select('*')).length;

    let groups = [], page = 1;

    for (let i = 0; i < (queue/seats); i++) {
        groups[i] = await connection(database)
            .limit(seats)
            .offset((page - 1) * seats)
            .select('*');
        
        page++    
    }
     
    return groups;
}

module.exports = {
    list
}