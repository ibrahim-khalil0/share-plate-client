import React from 'react';
import RequestedFood from './RequestedFood';

const MyFoodRequest = () => {
    return (
        <div className='bg-[#FAFAFA] px-[5%] min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 py-20 gap-10'>
                <RequestedFood></RequestedFood>
                <RequestedFood></RequestedFood>
                <RequestedFood></RequestedFood>

            </div>
        </div>
    );
};

export default MyFoodRequest;