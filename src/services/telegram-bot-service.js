import http from './http.js';

class TelegramBotService {
    constructor() {
        this.token = `489838568:AAGIRLvCtIYja2afRrU0nR4jBUaXIB-l-ng`;
    }

    sendMessage({id = '@reactbottes', msg = ''}, ...rest) {
        console.log(id);
        http
          .post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${id}&text=${msg}`)
          .then(res => console.log(res));
    }

    http(url, body) {
        http.post(url, body)
    }

}
export default TelegramBotService;