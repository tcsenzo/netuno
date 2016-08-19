let request = require('request');

class NotificationSender {
  send(res) {
    request({
      url: `http://localhost:8081/send`,
      method: `POST`,
    }, (error, response, body) => {
      res.json(JSON.parse(body));
    });
  }
}

module.exports = new NotificationSender();
