'use strict';
let Router = require('./router'),
		express = require('express'),
		http = require('http'),
		i18n = require('i18n'),
		bodyParser = require('body-)parser',
		morgan = require('morgan');

class App {
	constructor() {
		let	app = express(),
    		server = http.Server(app);

		this.i18nConfig();
		this.appConfig(app);
		new Router(app);

		this.startServer(server);
	}

	i18nConfig() {
		i18n.configure({
		  locales:['en'],
		  directory: 'app/locales',
			api: {
				'__': 't'
			}
		});
	}

	appConfig(app) {
		app.set('view engine', 'jade');
    app.set('views', `${__dirname}/../app/views/pages`);
		app.locals.basedir = `${__dirname}/../app/views`;
    app.use(i18n.init);
		app.use('/assets', express.static(`${__dirname}/assets`));
		app.use('/images', express.static(`${__dirname}/../app/assets/images`));
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true }));
		app.use(morgan('dev'))
	}

	startServer(server) {
		let port = process.env.PORT || 4001,
				serverName = process.env.IP || 'localhost';

		server.listen(port, serverName, () => console.log(`Listening on ${serverName}:${port}`));
	}
}

new App();
