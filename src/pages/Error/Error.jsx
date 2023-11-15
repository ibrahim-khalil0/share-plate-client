import React from 'react';
import Header from '../../sharedComponents/Header/Header';
import Footer from '../../sharedComponents/Footer/Footer';
import Helmets from '../../sharedComponents/Helmets/Helmets';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='relative'>
            <Helmets title={'| Error'}></Helmets>
            <div className='text-center my-32'>
                <h1 className='text-3xl font-semibold'>Oops...</h1>
                <h1 className='text-9xl font-bold tracking-widest'>404</h1>
                <h1 className='text-3xl font-semibold'>Not Found</h1>
                <Link to={'/'}><button className='primary-bg px-8 py-3 rounded-md text-white text-xl mt-4'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;