import ManageRequestTable from "./ManageRequestTable";

const ManageFoodRequest = () => {
    return (
        <div className="bg-[#FAFAFA] px-[5%] min-h-screen">
            <div>
                <h1 className="text-4xl py-20">All Request For : Food Name</h1>
                <ManageRequestTable></ManageRequestTable>
                
            </div>
        </div>
    );
};

export default ManageFoodRequest;