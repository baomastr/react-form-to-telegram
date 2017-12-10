import React, { PureComponent } from 'react';
import Paper from 'material-ui/Paper';
import Form from '../Form/FormPage.jsx'

import s from './HomePage.css'

class HomePage extends PureComponent {
    render() {
        return (
            <div className={s.wrapper}>
                <Paper zDepth={2} >
                    <div className={s.inner}>
                        <Form />
                    </div>
                </Paper>
            </div>
        );
    }
}

export default HomePage;
