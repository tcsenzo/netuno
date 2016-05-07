import request from 'request';

export default class Event {
  static all(res) {
    request.get('http://localhost:8080/events', (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }

  static show(res, id) {
    request.get(`http://localhost:8080/event/${id}`, (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }

  static create(res, event) {
    request({
      url: `http://localhost:8080/events/create`,
      method: `POST`,
      json: event,
    }, (error, response, body) => {
      res.json(body);
    });
  }
}
