const connection = require('../database/connection');
const state = require('../utils/state');

const content = state.load();

module.exports = {

    async add(request, response) {
        const database = (request.path).slice(((request.path).lastIndexOf('/')+1));
        const user_id = request.headers.authorization;

        let boolean = '';
        const checkIdExists = await connection(database).where('user_id', user_id).select();
        for (const id of checkIdExists) {
            boolean = Boolean(id.user_id);
        }
        if (boolean) {
            return response.status(400).json({ error: 'User is already in queue.' });
        }
        const [id] = await connection(database).insert({user_id});
    
        return response.json({ id });
    },

    async delete(request, response){
        const database = (request.path).substring(13, ((request.path).lastIndexOf('/')));
        
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const confirmDelete = Boolean(await connection(database).where('id', id).select('id').first());

        if (!confirmDelete) {
            return response.status(400).json({ error: 'Id does not exist' });
        }
        
        const check = await connection(database).where('id', id).select('user_id').first();
        
        if(check.user_id != user_id) {
            return response.status(401).json({ error: 'Operation not permitted' })
        }

        await connection(database).where('id', id).delete();
        return response.status(204).send(); 
    }
};