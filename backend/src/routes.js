const express = require('express');

const AttractionsController = require('./controllers/AttractionsController');
const ManagerController = require('./controllers/ManagerController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const UsersController = require('./controllers/UsersController');

const routes = express.Router();

routes.put('/past_rounds/rollercoaster', ManagerController.add);
routes.put('/past_rounds/windmill', ManagerController.add);
routes.post('/past_rounds/ferriswheel', ManagerController.add);
routes.post('/past_rounds/carousel', ManagerController.add);

routes.post('/sessions', SessionController.create);

routes.post('/attractions/rollercoaster', AttractionsController.add);
routes.delete('/attractions/rollercoaster/:id', AttractionsController.delete);

routes.post('/attractions/carousel', AttractionsController.add);
routes.delete('/attractions/carousel/:id', AttractionsController.delete);

routes.post('/attractions/windmill', AttractionsController.add);
routes.delete('/attractions/windmill/:id', AttractionsController.delete);

routes.post('/attractions/ferriswheel', AttractionsController.add);
routes.delete('/attractions/ferriswheel/:id', AttractionsController.delete); 

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.list);

routes.get('/profile', ProfileController.index);


module.exports = routes;