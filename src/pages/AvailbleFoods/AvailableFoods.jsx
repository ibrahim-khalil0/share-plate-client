
import { useLoaderData } from 'react-router-dom';
import Foods from '../../sharedComponents/Foods/Foods';
import Helmets from '../../sharedComponents/Helmets/Helmets';

const AvailableFoods = () => {

    const foods = useLoaderData()

    return (
        <div className='px-[5%] bg-[#FAFAFA]'>
            <Helmets title={'| Available Foods'}></Helmets>
            <div className='flex justify-center gap-12 items-center pt-10'>
                <div>
                    <button className='secondary-bg text-white px-5 text-lg py-2 rounded-md montserrat'>Sort By Date</button>
                </div>
                <div>
                    <input type="text" placeholder='Search Foods Here...' className='text-lg py-2 border border-gray-200 px-2 rounded-l-md' />
                    <input type="submit" value="Search" name="" id="" className='secondary-bg text-lg py-2 px-2 rounded-r-md text-white border border-[#41548C]' />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-16'>
                {
                    foods.map(food => <Foods key={food._id} food={food}></Foods>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;