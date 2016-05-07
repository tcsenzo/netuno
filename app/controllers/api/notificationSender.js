import request from 'request';

export default class NotificationSender {
  static send(res) {
    request({
      url: `http://localhost:8080/bla`,
      method: `POST`,
    }, (error, response, body) => {
      res.json(body);
    });
  }
}
