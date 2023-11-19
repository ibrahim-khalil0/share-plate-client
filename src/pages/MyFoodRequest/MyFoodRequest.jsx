import React, { useContext, useEffect, useState } from 'react';
import RequestedFood from './RequestedFood';
import Helmets from '../../sharedComponents/Helmets/Helmets';
import { AuthContext } from '../../Providers/AuthProviders';

const MyFoodRequest = () => {

    const [foods, setFoods] = useState([])
    const {user} = useContext(AuthContext)

    useEffect( () => {
        fetch(`https://share-plate-server-tau.vercel.app/requestedFoods?email=${user.email}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <div className='bg-[#FAFAFA] px-[5%]'>
            <Helmets title={'| My Food Requests'}></Helmets>
            {
                foods.length ? <div className='grid grid-cols-1 md:grid-cols-2 py-20 gap-10'>
                {
                    foods.map(food => <RequestedFood key={food._id} food={food} foods={foods} setFoods={setFoods}></RequestedFood>)
                }

            </div>
            :
            <div className="text-center py-32 text-5xl">You Have Not Any Food Request</div>
            }
        </div>
    );
};

export default MyFoodRequest;