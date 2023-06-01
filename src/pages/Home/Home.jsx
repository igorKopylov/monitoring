import React from 'react';
import styles from './Home.module.scss';
import Controllers from './../../components/Controllers/Controllers';
import LeftBar from './../../components/LeftBar/LeftBar';
import { Route, Routes } from 'react-router';
import Settings from './../Settings/Settings';
import Users from './../Users/Users';
import { setActiveSensor } from '../../store/reducer';

const Home = () => {
    console.log(localStorage.getItem('token'))
    setActiveSensor(1)
    return (
        <>
            <LeftBar />
            <Routes>
                <Route path='/' element={<Controllers />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </>
    )
}

export default Home