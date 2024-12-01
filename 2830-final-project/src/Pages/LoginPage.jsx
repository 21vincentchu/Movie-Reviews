import React, {useState} from 'react';
import '../login-page.css'

function LoginPage({}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');   


    const handleSubmit = ( event ) => {
       event.preventDefault();
       if(!username || !password){
            setErrorMessage('Please enter a Username and Password');
       }
       else{
        console.log('Username:', username);
        console.log('Password:', password);
        setErrorMessage('');
       }
     };

    return(
        <div>
            <div className='circle-background'></div>
            <div className='content'>
                <h1 className='login-welcome'>Welcome to </h1>
                <h1 className='login-welcome'>FreshTomato!</h1>
                <p className='login-subtext'>Let's get you logged in.</p>

                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='login-field'>
                        <label className="login-label" htmlFor="un">Username</label>
                        <input name='un' className='login-entrybox' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='login-field'>
                        <label className="login-label"  htmlFor="pwd">Password</label>
                        <input name='pwd' type="password" className='login-entrybox' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='login-field'>
                        <button type="submit" className='welcome-submit-button'>Login</button>
                    </div>
                </form>
                {errorMessage && (<div className="error-message">{errorMessage}</div>)}
            </div>
        </div>
    )
}

export default LoginPage;