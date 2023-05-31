import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  const isAuth = useSelector(store => store.isAuth)

  return (
    <div className="app">
      <Routes>
        <Route path='/*' element={isAuth ? <Home /> : <Navigate to='/login' />} />
        <Route
          path='/login'
          element={!isAuth ? <Login /> : <Navigate to='/' />}
        />
      </Routes>
    </div>
  );
}

export default App;
