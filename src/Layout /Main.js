import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHeader from '../components/NavbarHeader/NavbarHeader';


const Main = () => {
    return (
        <div>
            <NavbarHeader></NavbarHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;