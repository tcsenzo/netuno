let request = require('request');

class Event {
  all(res) {
    request.get('http://localhost:8080/events', (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }

  show(res, id) {
    request.get(`http://localhost:8080/event/${id}`, (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }

  create(res, event) {
    request({
      url: `http://localhost:8080/events/create`,
      method: `POST`,
      json: event,
    }, (error, response, body) => {
      res.json(body);
    });
  }
}

module.exports = new Event();
