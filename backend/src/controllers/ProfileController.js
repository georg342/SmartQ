const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const user_id = request.headers.authorization;

        const attractions = ['rollercoaster', 'carousel', 'windmill', 'ferriswheel']
        let i = 0, check = '', queue_check = '', user_queues = [];
        
        for (const attraction of attractions) {
            queue_check = attractions[i];
            
            attractions[i] = (await connection(attraction).where('user_id', user_id).select('user_id'));
            check = attractions[i];
            
            if (check != ''){ user_queues.push(queue_check); }
            
            i++;
        };
    
        return response.json(user_queues);
    }

};