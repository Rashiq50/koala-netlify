import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContent from './MainContent';

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainContent/>}/>
            </Routes>
        </>
    );
};

export default AllRoutes;