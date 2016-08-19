let IndexController = require('./controllers/index'),
		ApiEventController = require('./controllers/api/event'),
		NotificationSenderController = require('./controllers/api/notificationSender');

class Router {
	constructor(app) {
		app.get('/', (req, res) => IndexController.index(res));

		app.get('/api/events', (req, res) => ApiEventController.all(res));
		app.get('/api/event/:id', (req, res) => ApiEventController.show(res, req.params.id));
		app.post('/api/event/create', (req, res) => ApiEventController.create(res, req.body));

		app.post('/api/notify-send', (req, res) => NotificationSenderController.send(res));
	}
}

module.exports = Router;
