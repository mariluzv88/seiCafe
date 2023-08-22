import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage';
import NewOrderPage from './pages/NewOrder/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage';
import NavBar from './components/Nav/NavBar';
import './App.css';

function App() {
  const [user,setUser]=useState({})
 
  return (
    <main className="App">
     {
       user?
       <>
          <NavBar/>
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage/>}/>
            <Route path='/orders' element={<OrderHistoryPage/>}/>
          </Routes>
       </>
       :
      <AuthPage/>
     }
    </main>
  );
}

export default App;
