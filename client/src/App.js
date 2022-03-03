import './App.css';
import {Routes, Route} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import HomePage from "./pages/HomePage"


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<WelcomePage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/profile"/>
                <Route path="/posts"/>
        </Routes>

    </div>
    );
}

export default App;
