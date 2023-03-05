import logo from './logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './MyComponent/MyComponent';
import ListToDo from './Todos/ListToDo';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users/Users';
import DetailUser from './DetailUser/DetailUser';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<ListToDo />} />
                        <Route path="/about" element={<MyComponent />} />
                        <Route path="/user" element={<Users />} />
                        <Route path="/user/:id" element={<DetailUser />} />
                    </Routes>
                </header>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <ToastContainer />
            </div>
        </BrowserRouter>
    );
}

export default App;
