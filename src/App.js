import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './pages/HomePage/HomePage.jsx'
import styles from './App.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className={styles.App}>
                    <HomePage />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
