import { useParams } from "react-router-dom";
import Helmets from "../../sharedComponents/Helmets/Helmets";
import ManageRequestTable from "./ManageRequestTable";
import { useEffect, useState } from "react";

const ManageFoodRequest = () => {
    const {id} = useParams()
    const [foods, setFoods] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/manageRequest?food=${id + 1}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    return (
        <div className="bg-[#FAFAFA] px-[5%] min-h-screen">
            <Helmets title={'| Manage Food Request'}></Helmets>
            <div>
                <h1 className="text-4xl py-20">All Request For : {foods[0]?.foodName}</h1>
                <ManageRequestTable foods={foods}></ManageRequestTable>
                
            </div>
        </div>
    );
};

export default ManageFoodRequest;