// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/Home.component';
import Register from './components/Register';
import Login from './components/Login';
// import Home from './components/home';
import { ToastContainer } from 'react-toastify';
import { Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import styles from "./index.css"
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Adduser from './components/Adduser';
import Updateuser from './components/Updateuser';
import UserListing from './components/UserListing';
// import { Toast } from 'bootstrap';
import Store from './Redux/Store';
// import { Forgot } from './components/forgotpassword';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/adduser' element={<Adduser />}></Route>
          <Route path='/update/:code' element={<Updateuser />}></Route>
          {/* <Route path='/listuser' element={<UserListing />}></Route> */}
          {/* <Route path='/forgotpassword' element={<Forgot/>}></Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position" position="bottom-right">
      </ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
