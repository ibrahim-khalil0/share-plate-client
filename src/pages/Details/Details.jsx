import React, { useContext } from 'react';
import Helmets from '../../sharedComponents/Helmets/Helmets';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';

const Details = () => {

    const {user} = useContext(AuthContext)

    const food = useLoaderData()
    const {foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, donatorName, additionalNote} = food

    const handleRequest = e => {
        e.preventDefault()
        const form = e.target
        const requestNotes = form.requestNotes.value
        const donationAmount = form.donationAmount.value
        food.donationAmount = donationAmount
        food.requestNotes = requestNotes
        food.requesterEmail = user.email
        food.requestId = food._id + 1
        food.requesterName = user.displayName
        food.requesterImage = user.photoURL
        delete food._id

        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const requestDate = `${day}-${month}-${year}`;

        food.requestDate = requestDate
        console.log(food)

        fetch(`https://share-plate-server-tau.vercel.app/request`, {
            method: 'POST',
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify(food)

        })
        .then(res => res.json())
        .then(data => {
            toast('You Successfully Send a Request For This Food')
            form.reset()
        })
    }


    return (
        <div>
            <Helmets title={'| Details'}></Helmets>
            <div className='px-[5%] grid grid-cols-1 md:grid-cols-2 pt-20 mb-20'>
                <div className='bg-[#FAFAFA] rounded-l-md p-10'>
                    <h2 className='capitalize text-4xl'><b>Food Name :</b> {foodName}</h2>
                    <p className='text-base mt-2'>{additionalNote}</p>
                    <div className='capitalize text-xl my-8'>
                        <h3 className='flex justify-between'><b className='w-1/3'>Donar Name</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>{donatorName}</span></h3>
                        <h3 className='flex justify-between'><b className='w-1/3'>Pickup Location</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>{pickupLocation}</span></h3>
                    </div>

                    <h3 className='flex justify-between text-xl'><b className='w-1/3'>Available For</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>{foodQuantity} Person</span></h3>
                    <h3 className='flex justify-between text-xl'><b className='w-1/3'>Expire Date</b> <b className='w-[20px]'>:</b> <span className='flex-1 ml-4'>{expiredDateTime}</span></h3>
                    <div>
                        <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='secondary-bg px-5 py-3 text-lg text-white montserrat rounded-md mt-10'>Send Request For a Food</button>
                    </div>
                </div>
                <div>
                    <img src={foodImage} alt="" className='w-full rounded-r-md max-h-[450px]' />
                </div>

               
                <dialog id="my_modal_3" className="modal bg-[#000000b8]">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <form onSubmit={handleRequest} className='mt-8 space-y-5'>
                                <textarea name="requestNotes" id="" placeholder='Additional Notes' rows="3" className='w-full border border-gray-300 outline-0 rounded-md px-5 py-3'></textarea>
                                <input type="number" name='donationAmount' placeholder='Donation Amount'className='w-full border border-gray-300 outline-0 rounded-md px-5 py-3' />
                                <input type="submit" value="Send Request" name="" id="" className='primary-bg cursor-pointer px-5 py-2 rounded-md text-white text-lg montserrat w-full text-center' />
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;