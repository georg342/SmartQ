const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async list(request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response) {
    const {name, email} = request.body; 
    let {password} = request.body;    
    const id = crypto.randomBytes(4).toString('HEX');
    password = crypto.createHash('md5').update(password).digest('hex');    
    await connection('users').insert({
        id,
        name,
        email,
        password
    });

    return response.json({ id, password});
    }
};