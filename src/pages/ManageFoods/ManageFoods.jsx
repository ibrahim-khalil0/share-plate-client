import React, { useContext, useEffect, useState } from 'react';
import CustomizedTables from './Table';
import Helmets from '../../sharedComponents/Helmets/Helmets';
import { AuthContext } from '../../Providers/AuthProviders';


const ManageFoods = () => {

    const [foods, setFoods] = useState([])
    const {user} = useContext(AuthContext)

    const [updateDependency, setUpdateDependency] = useState('foodName')

    useEffect( () => {
        fetch(`http://localhost:5000/foods?email=${user.email}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [updateDependency])

    return (
        <div className='bg-[#FAFAFA] px-[5%] py-20'>
            <Helmets title={'| Manage Foods'}></Helmets>
            {
                foods.length ? <CustomizedTables foods={foods} setUpdateDependency={setUpdateDependency}></CustomizedTables>
                :
                <div className="text-center py-32 text-5xl"><h1>You did not added any food</h1></div>
            }
            
        </div>
    );
};

export default ManageFoods;