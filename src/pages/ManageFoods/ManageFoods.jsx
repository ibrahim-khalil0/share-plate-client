import React from 'react';
import CustomizedTables from './Table';
import Helmets from '../../sharedComponents/Helmets/Helmets';


const ManageFoods = () => {
    return (
        <div className='bg-[#FAFAFA] px-[5%] py-20'>
            <Helmets title={'| Manage Foods'}></Helmets>
            <CustomizedTables></CustomizedTables>
            
        </div>
    );
};

export default ManageFoods;