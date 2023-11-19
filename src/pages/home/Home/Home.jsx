import { useLoaderData } from "react-router-dom";
import Helmets from "../../../sharedComponents/Helmets/Helmets";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import { useEffect, useState } from "react";


const Home = () => {

    const [allFoods, setAllFoods] = useState([])
    const totalFoods = useLoaderData()
    useEffect( () => {
        setAllFoods(totalFoods)
    }, [totalFoods])
    
    const sortedFoods = allFoods.sort((a, b) => parseInt(b.foodQuantity) - parseInt(a.foodQuantity));
    let foods = sortedFoods
    if(sortedFoods.length > 3){
        foods = sortedFoods.slice(0, 6)
    }

    return (
        <div>
            <Helmets title={''}></Helmets>
            {
                allFoods.length ?
                <div>
                    <Banner></Banner>
                    <FeaturedFood foods={foods}></FeaturedFood>
                </div>
                :
                <div>
                    <span className="loading loading-spinner text-error"></span>
                </div>
            }
        </div>
    );
};

export default Home;