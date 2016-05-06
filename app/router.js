import IndexController from './controllers/index';
import ApiEventController from './controllers/api/event';

export default class Router {
	constructor(app) {
		app.get('/', (req, res) => IndexController.index(res));

		app.get('/api/events', (req, res) => ApiEventController.all(res));
	}
}
