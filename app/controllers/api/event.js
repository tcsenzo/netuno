import request from 'request';

export default class Index {
  static all(res) {
    request('http://localhost:8080/events', (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }

  static show(res, id) {
    request(`http://localhost:8080/event/${id}`, (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }
}
