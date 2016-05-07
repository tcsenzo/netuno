import IndexController from './controllers/index';
import ApiEventController from './controllers/api/event';
import NotificationSenderController from './controllers/api/notificationSender';

export default class Router {
	constructor(app) {
		app.get('/', (req, res) => IndexController.index(res));

		app.get('/api/events', (req, res) => ApiEventController.all(res));
		app.get('/api/event/:id', (req, res) => ApiEventController.show(res, req.params.id));
		app.post('/api/event/create', (req, res) => ApiEventController.create(res, req.body));

		app.post('/api/send-notification', (req, res) => NotificationSenderController.send(res));
	}
}
