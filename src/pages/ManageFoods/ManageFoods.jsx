import React, { useContext, useEffect, useState } from 'react';
import CustomizedTables from './Table';
import Helmets from '../../sharedComponents/Helmets/Helmets';
import { AuthContext } from '../../Providers/AuthProviders';


const ManageFoods = () => {

    const [foods, setFoods] = useState([])
    const {user} = useContext(AuthContext)

    useEffect( () => {
        fetch(`http://localhost:5000/foods?email=${user.email}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    return (
        <div className='bg-[#FAFAFA] px-[5%] py-20'>
            <Helmets title={'| Manage Foods'}></Helmets>
            <CustomizedTables foods={foods}></CustomizedTables>
            
        </div>
    );
};

export default ManageFoods;