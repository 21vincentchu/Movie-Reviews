import React, {useState} from 'react';
import '../pages.css'

function LaunchPage({}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Username:', username);
       console.log('Password:', password);
     };

    return(
        <div>
            <h1 className='login-welcome'>Welcome to FreshTomato!</h1>
            <p className='login-subtext'>Let's get you logged in.</p>
            
            <div className='login-field'>
                <label className="login-label" htmlFor="un">Username</label>
                <input name='un' className='login-entrybox' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='login-field'>
                <label className="login-label"  htmlFor="pwd">Password</label>
                <input name='pwd' type="text" className='login-entrybox' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='login-field'>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default LaunchPage;