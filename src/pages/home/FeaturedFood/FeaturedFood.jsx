import React from 'react';
import Foods from '../../../sharedComponents/Foods/Foods';
import { Link } from 'react-router-dom';

const FeaturedFood = () => {
    return (
        <div className='bg-[#FAFAFA] px-[5%] py-24'>
            <h1 className='text-center text-5xl font-semibold'>Featured Food</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14'>
                {
                    <Foods></Foods>
                }
                {
                    <Foods></Foods>
                }

            </div>
            <div className='text-center mt-16'>
                <Link to={'/foods'}><button className='secondary-bg text-white px-8 py-2 rounded-md text-lg'>Show All</button></Link>
            </div>
        </div>
    );
};

export default FeaturedFood;