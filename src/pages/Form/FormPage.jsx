import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import TelegramBotService from "../../services/telegram-bot-service.js";

const Serivce = new TelegramBotService();
class FormPage extends Component {
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
                    <p>
                        <TextField
                            hintText="Логин"
                            type="text"
                            name="login"
                            value={this.state.login}
                            onChange={this.onLoginChange}
                        />
                    </p>
                    <p>
                        <TextField
                            hintText="Получатель"
                            type="text"
                            name="recipient"
                            value={this.state.recipient}
                            onChange={this.onRecipientChange}
                        />
                    </p>
                    <p>
                        <TextField
                            hintText="Текст сообщения"
                            type="text"
                            name="message"
                            value={this.state.message}
                            onChange={this.onMessageChange}
                            multiLine={true}
                        />
                    </p>
                    <p><input type="submit" value="Submit"/></p>
                </form>
            </div>
        );
    }
}

export default FormPage;
