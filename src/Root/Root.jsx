import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sharedComponents/Header/Header';
import BasicTable from '../table';

const Root = () => {
    return (
        <div className='max-w-[2100px] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;