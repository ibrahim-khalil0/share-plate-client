import React from 'react';
import { Link } from 'react-router-dom';

const Foods = () => {
    return (
        <div className='bg-white flex gap-8 rounded-md'>
            <div className='w-2/6'>
                <img src="https://img.freepik.com/free-photo/community-actions-with-food-donations_23-2149196162.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais" alt="" className='w-full h-full rounded-l-md' />
            </div>
            <div className='py-4 pr-3 flex-1'>
                <h1 className='text-3xl font-semibold'>Food Tittle</h1>
                <div className='flex place-items-center gap-3 text-base'>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png" className='w-6' alt="" />
                    <h2 className='montserrat'>Md Ibrahim Khalil</h2>
                </div>
                <p className='py-3'>this is extra additional note for this product</p>
                <div>
                    <h3><b>Location :</b> Mirpur-1, Dahaka</h3>
                    <h3><b>Expired Date :</b> 10 july 2023</h3>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <h3><b>Available For :</b> 3 Person</h3>
                    <Link to={`/food/1`}><button className='primary-bg text-white rounded px-4 py-1'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Foods;