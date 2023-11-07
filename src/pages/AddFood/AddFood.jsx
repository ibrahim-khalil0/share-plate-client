import React from 'react';

const AddFood = () => {
    return (
        <div style={{backgroundImage: 'url("https://www.efsa.europa.eu/sites/default/files/news/food-donations.jpg")'}} className='bg-cover bg-center'>
            <div className=' h-full px-[5%] py-20'>
                <form className='backdrop-blur-sm bg-white/30 backdrop-brightness-50 p-20 rounded-md'>
                    <h1 className='text-center text-5xl bg-white mb-10 rounded-md py-3'>Add a Food</h1>
                    <div className='grid grid-cols-2 gap-8'>
                        <input className='rounded-md text-lg px-2 py-3' type="text" id="foodName" name="foodName" placeholder="Food Name" required/>

                        <input className='rounded-md text-lg px-2 py-3' type="url" id="foodImage" name="foodImage" placeholder="Food Image (URL)" required/>

                        <input className='rounded-md text-lg px-2 py-3' type="number" id="foodQuantity" name="foodQuantity" placeholder="Food Quantity" required/>

                        <input className='rounded-md text-lg px-2 py-3' type="text" id="pickupLocation" name="pickupLocation" placeholder="Pickup Location" required/>

                        <select name="" id="" className='rounded-md text-lg px-2 py-3 col-span-2'>
                            <option value="Available" selected >Available</option>
                            <option value="Available">Not Available</option>
                        </select>

                        <input className='rounded-md text-lg px-2 py-3' type="datetime-local" id="expiredDateTime" name="expiredDateTime" placeholder="Expired Date/Time" required/>

                        

                        <input className='rounded-md text-lg px-2 py-3' type="url" id="donatorImage" name="donatorImage" placeholder="Donator Image (URL)" required/>

                        <input className='rounded-md text-lg px-2 py-3' type="text" id="donatorName" name="donatorName" value="John Doe" readonly/>

                        <input className='rounded-md text-lg px-2 py-3' type="email" id="donatorEmail" name="donatorEmail" value="john@example.com" readonly/>

                        <input className='rounded-md text-lg px-2 py-3' type="hidden" id="foodStatus" name="foodStatus" value="available"/>

                        
                    </div>
                    <br />
                    <div>
                        <textarea className='w-full rounded-md text-lg px-2 py-3' id="additionalNotes" name="additionalNotes" placeholder="Additional Notes"></textarea>
                        <input type="submit" value="Add Food" className='secondary-bg text-white text-lg px-8 py-2 rounded-md mt-3' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;