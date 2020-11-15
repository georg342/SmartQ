const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const { email } = request.body;
        let { password } = request.body;
        password = crypto.createHash('md5').update(password).digest('hex');   
        
        const user = await connection('users')
        .where('email', email)
        .andWhere('password', password)
        .select('name')
        .first();

        if(!user){
            return response.status(400).json({ error: 'EMAIL and/or PASSWORD not found' });
        }

        return response.json(user.name);
    }

};