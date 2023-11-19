import React from 'react';
import { Link } from 'react-router-dom';

const Foods = ({food}) => {

    const {_id, foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, status, donatorImage, donatorEmail, donatorName, additionalNote} = food
    return (
        <div className='bg-white flex gap-8 rounded-md food-shadow'>
            <div className='w-2/6'>
                <img src={foodImage} alt="" className='w-full h-full rounded-l-md' />
            </div>
            <div className='py-4 pr-3 flex-1'>
                <h1 className='text-3xl font-semibold'>{foodName}</h1>
                <div className='flex place-items-center gap-3 text-base'>
                    <img src={donatorImage} className='w-6 rounded-full' alt="" />
                    <h2 className='montserrat'>{donatorName}</h2>
                </div>
                <p className='py-3'>{additionalNote}</p>
                <div>
                    <h3><b>Location :</b> {pickupLocation}</h3>
                    <h3><b>Expired Date :</b> {expiredDateTime}</h3>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <h3><b>Available For :</b> {foodQuantity} Person</h3>
                    <Link to={`/food/${_id}`}><button className='primary-bg text-white rounded px-4 py-1'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Foods;