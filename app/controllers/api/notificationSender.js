import request from 'request';

export default class NotificationSender {
  static send(res) {
    request({
      url: `http://localhost:8081/send`,
      method: `POST`,
    }, (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }
}
