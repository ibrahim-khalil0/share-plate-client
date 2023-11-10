import { useLoaderData } from "react-router-dom";
import Helmets from "../../../sharedComponents/Helmets/Helmets";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";


const Home = () => {

    const allFoods = useLoaderData()
    const sortedFoods = allFoods.sort((a, b) => parseInt(b.foodQuantity) - parseInt(a.foodQuantity));
    let foods = sortedFoods
    if(sortedFoods.length > 3){
        foods = sortedFoods.slice(0, 6)
    }
    // console.log(sortedFoods)

    return (
        <div>
            <Helmets title={''}></Helmets>
            <Banner></Banner>
            <FeaturedFood foods={foods}></FeaturedFood>
        </div>
    );
};

export default Home;