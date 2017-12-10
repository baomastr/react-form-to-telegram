import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import TelegramBotService from "../../services/telegram-bot-service.js";

const Serivce = new TelegramBotService();
class FormPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {login: '', recipient: '', message: ''};

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onRecipientChange = this.onRecipientChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        console.log(`${this.state.login}, добро пожаловать!`);
        console.log(`Сообщение \n "${this.state.message}" \n успешно отправлено получателю "${this.state.recipient}"`);
        event.preventDefault();

        Serivce.sendMessage({id:'@reactbottest', msg: JSON.stringify(this.state)});
    }

    onLoginChange(e) {
        this.setState({login: e.target.value});
    }

    onRecipientChange(e) {
        this.setState({recipient: e.target.value});
    }

    onMessageChange(e){
        this.setState({message: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <TextField
                            floatingLabelText="Логин"
                            hintText="Введите Ваш логин"
                            name="login"
                            value={this.state.login}
                            onChange={this.onLoginChange}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Получатель"
                            hintText="Введите получателя"
                            name="recipient"
                            value={this.state.recipient}
                            onChange={this.onRecipientChange}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Сообщение"
                            /*floatingLabelFixed={true}*/
                            hintText="Введите текст сообщения"
                            name="message"
                            value={this.state.message}
                            onChange={this.onMessageChange}
                            /*multiLine={true}*/
                            /*rows={2}*/
                        />
                    </div>
                    <div><input type="submit" value="Submit"/></div>
                </form>
            </div>
        );
    }
}

export default FormPage;
