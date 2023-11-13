import React from 'react';

const RequestedFood = ({food}) => {
    const {foodImage, pickupLocation, expiredDateTime, status, donatorName, requestDate, donationAmount} = food

    return (
        <div className='bg-white rounded-md shadow-lg shadow-gray-300'>
            <div>
                <img src={foodImage} alt="" className='w-full h-[300px] rounded-t-md' />
            </div>
            <div className='xl:flex justify-between pt-8 px-8 text-lg gap-2'>
                <div className='space-y-5'>
                    <h3 className='montserrat flex justify-between'><b className='w-[80px]'>Donar</b> <b className='w-2 pr-5'>:</b> <span className='flex-1 text-right xl:text-lef primary-color'>{donatorName}</span></h3>

                    <h3 className='montserrat flex justify-between'><b className='w-[80px]'>Location</b> <b className='w-2 pr-5'>:</b> <span className='flex-1 text-right xl:text-lef primary-color'>{pickupLocation}</span></h3>

                    <h3 className='montserrat flex justify-between'><b className='w-[80px]'>Expire</b> <b className='w-2 pr-5'>:</b> <span className='flex-1 text-right xl:text-lef primary-color'>{expiredDateTime}</span></h3>
                </div>

                <div className='mt-10 xl:mt-0 space-y-5'>
                    <h3 className='montserrat flex justify-between'><span className='flex-1 secondary-color'>Request Date</span> <b className='w-2 px-5'>:</b> <b className='w-[155px] text-right'>{requestDate}</b></h3>

                    <h3 className='montserrat flex justify-between'><span className='flex-1 secondary-color'>Donation Amount</span> <b className='w-2 px-5'>:</b> <b className='w-[155px] text-right'>{donationAmount}</b></h3>

                    <h3 className='montserrat flex justify-between'><span className='flex-1 secondary-color'>Status</span> <b className='w-2 px-5'>:</b> <b className='w-[155px] text-right'>{food.manageStatus ? food.manageStatus : 'Pending'}</b></h3>
                </div>
            </div>
            <div className='text-center py-8'>
                <button className='border border-gray-400 px-8 py-3 rounded-md font-bold text-lg'>Cancel Request</button>
            </div>
        </div>
    );
};

export default RequestedFood;