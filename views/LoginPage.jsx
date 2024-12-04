import React, { useState } from 'react';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!username || !password) {
            setErrorMessage('Please enter a Username and Password');
        }
        else {
            console.log('Username:', username);
            console.log('Password:', password);
            setErrorMessage('');
        }
    };

    return(
        <div>
            <div style={styles.circleBackground}></div>
            <div style={styles.content}>
                <h1 style={styles.loginWelcome}>Welcome to </h1>
                <h1 style={styles.loginWelcome}>FreshTomato!</h1>
                <p style={styles.loginSubtext}>Let's get you logged in.</p>

                <form style={styles.loginForm} onSubmit={handleSubmit}>
                    <div style={styles.loginField}>
                        <label style={styles.loginLabel} htmlFor="un">Username</label>
                        <input
                            name='un'
                            style={styles.loginEntrybox}
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div style={styles.loginField}>
                        <label style={styles.loginLabel} htmlFor="pwd">Password</label>
                        <input
                            name='pwd'
                            type="password"
                            style={styles.loginEntrybox}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div style={styles.loginField}>
                        <button type="submit" style={styles.welcomeSubmitButton}>Login</button>
                    </div>
                </form>
                {errorMessage && (<div style={styles.errorMessage}>{errorMessage}</div>)}
            </div>
        </div>
    );
}

const styles = {
    loginWelcome: {
        fontFamily: "'Funnel Display', serif",
        display: 'block',
        color: 'rgb(255, 255, 255)',
        fontSize: '40pt',
        fontWeight: 800,
        marginBottom: '5px',
        marginLeft: '40px'
    },
    loginSubtext: {
        fontFamily: "'Funnel Display', serif",
        display: 'block',
        fontWeight: 500,
        fontSize: '20pt',
        color: 'rgb(213, 213, 213)',
        marginTop: '15px',
        marginLeft: '60px'
    },
    loginLabel: {
        fontFamily: "'Funnel Display', serif",
        display: 'block',
        fontWeight: 500,
        color: 'rgb(242, 242, 242)',
        marginLeft: '25px',
        fontSize: '14pt'
    },
    loginEntrybox: {
        minWidth: '15em',
        minHeight: '2em',
        marginBottom: '15px',
        marginLeft: '25px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    loginForm: {
        marginTop: '80px',
        marginLeft: '80px'
    },
    circleBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '40%',
        height: '1000px',
        backgroundColor: 'rgb(241, 50, 24)',
        borderRadius: '0% 50% 50% 0%',
        zIndex: -1
    },
    welcomeSubmitButton: {
        minWidth: '10em',
        minHeight: '2em',
        fontSize: '11pt',
        fontFamily: "'Funnel Display', serif",
        display: 'block',
        fontWeight: 500,
        marginBottom: '15px',
        marginTop: '10px',
        marginLeft: '45px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    content: {
        position: 'relative',
        zIndex: 1
    },
    errorMessage: {
        fontFamily: "'Funnel Display', serif",
        display: 'block',
        fontWeight: 500,
        textDecoration: 'underline',
        color: 'rgb(255, 255, 255)',
        marginLeft: '50px',
        fontSize: '14pt',
        marginTop: '35px'
    }
};

module.exports = LoginPage;