import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sharedComponents/Header/Header';
import Footer from '../sharedComponents/Footer/Footer';
import Quotes from '../sharedComponents/Quotes/Quotes';

const Root = () => {
    return (
        <div className='max-w-[2100px] mx-auto'>
            <Quotes></Quotes>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;