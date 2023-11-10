import React, { useContext } from 'react';
import Helmets from '../../sharedComponents/Helmets/Helmets';
import { AuthContext } from '../../Providers/AuthProviders';

const AddFood = () => {

    const {user} = useContext(AuthContext)
    const {displayName, email, photo} = user

    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target
        
        const foodName = form.foodName.value
        const foodImage = form.foodImage.value
        const foodQuantity = form.foodQuantity.value
        const pickupLocation = form.pickupLocation.value
        const expiredDateTime = form.expiredDateTime.value
        const status = form.status.value
        const donatorImage = form.donatorImage.value
        const donatorName = form.donatorName.value
        const donatorEmail = form.donatorEmail.value
        const additionalNote = form.additionalNote.value

        const newFood = {foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, status, donatorImage, donatorEmail, donatorName, additionalNote}
        


        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify(newFood)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('food added')
        })
    }
    return (
        <div style={{backgroundImage: 'url("https://www.efsa.europa.eu/sites/default/files/news/food-donations.jpg")'}} className='bg-cover bg-center'>
            <Helmets title={'| Add Food'}></Helmets>
            <div className=' h-full px-[5%] py-20'>
                <form onSubmit={handleAddFood} className='backdrop-blur-sm bg-white/30 backdrop-brightness-50 p-20 rounded-md'>
                    <h1 className='text-center text-5xl bg-white mb-10 rounded-md py-3'>Add a Food</h1>
                    <div className='grid grid-cols-2 gap-8'>
                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="foodName" name="foodName" placeholder="Food Name" required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="url" id="foodImage" name="foodImage" placeholder="Food Image (URL)" required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="number" id="foodQuantity" name="foodQuantity" placeholder="Food Quantity" required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="pickupLocation" name="pickupLocation" placeholder="Pickup Location" required/>

                        <select name="status" id="" className='rounded-md text-lg px-2 py-3 col-span-2'>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="date" id="expiredDateTime" name="expiredDateTime" placeholder="Expired Date/Time" required/>

                        

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="url" id="donatorImage" name="donatorImage" placeholder="Donator Image (URL)" value={photo} readOnly/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="donatorName" name="donatorName" value={displayName} readOnly/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="email" id="donatorEmail" name="donatorEmail" value={email} readOnly/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="hidden" id="foodStatus" name="foodStatus" value="available"/>

                        
                    </div>
                    <br />
                    <div>
                        <textarea className='w-full rounded-md text-lg px-2 py-3' id="additionalNotes" name="additionalNote" placeholder="Additional Notes"></textarea>
                        <input type="submit" value="Add Food" className='secondary-bg text-white text-lg px-8 py-2 rounded-md mt-3 cursor-pointer' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;