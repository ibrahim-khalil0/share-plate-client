import React from 'react';
import Helmets from '../../sharedComponents/Helmets/Helmets';

const Details = () => {
    return (
        <div>
            <Helmets title={'| Details'}></Helmets>
            <div className='px-[5%] grid grid-cols-1 md:grid-cols-2 pt-20'>
                <div className='bg-[#FAFAFA] rounded-l-md p-10'>
                    <h2 className='capitalize text-4xl'><b>Food Name :</b> This is food name</h2>
                    <p className='text-base mt-2'>this is additional information for this food. if you want this food please send  a request</p>
                    <div className='capitalize text-xl my-8'>
                        <h3 className='flex justify-between'><b className='w-1/3'>Donar Name</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>Md Ibrahim Khalil</span></h3>
                        <h3 className='flex justify-between'><b className='w-1/3'>Pickup Location</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>Mirpur-1 Dhaka</span></h3>
                    </div>

                    <h3 className='flex justify-between text-xl'><b className='w-1/3'>Available For</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>3 Person</span></h3>
                    <h3 className='flex justify-between text-xl'><b className='w-1/3'>Expire Date</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>13 july 2023</span></h3>
                    <div>
                        <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='secondary-bg px-5 py-3 text-lg text-white montserrat rounded-md mt-10'>Send Request For a Food</button>
                    </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/community-actions-with-food-donations_23-2149196162.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais" alt="" className='w-full h-full rounded-r-md' />
                </div>


                {/* You can open the modal using document.getElementById('ID').showModal() method */}
               
                <dialog id="my_modal_3" className="modal bg-[#000000b8]">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <form className='mt-8 space-y-5'>
                                <textarea name="" id="" placeholder='Additional Notes' rows="3" className='w-full border border-gray-300 outline-0 rounded-md px-5 py-3'></textarea>
                                <input type="text" placeholder='Donation Amount'className='w-full border border-gray-300 outline-0 rounded-md px-5 py-3' />
                                <input type="submit" value="Send Request" name="" id="" className='primary-bg px-5 py-2 rounded-md text-white text-lg montserrat w-full text-center' />
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Details;