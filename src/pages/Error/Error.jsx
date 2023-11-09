import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import Footer from '../../sharedComponents/Footer/Footer';
import Helmets from '../../sharedComponents/Helmets/Helmets';

const Error = () => {
    return (
        <div className='min-h-screen relative'>
            <Header></Header>
            <Helmets title={'| Error'}></Helmets>
            <div className='text-center my-32'>
                <h1 className='text-3xl font-semibold'>Oops...</h1>
                <h1 className='text-9xl font-bold tracking-widest'>404</h1>
                <h1 className='text-3xl font-semibold'>Not Found</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;