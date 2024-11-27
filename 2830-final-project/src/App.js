import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';


// PUT THIS IN LATER
//<Route path="/main" element={<MainPage/>} /> 

function App(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default App;