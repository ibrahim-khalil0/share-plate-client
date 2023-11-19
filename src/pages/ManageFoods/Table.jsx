import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaRegPenToSquare } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function CustomizedTables({foods, setUpdateDependency}) {

  const {user} = useContext(AuthContext)
  const [allFoods, setAllFoods] = useState([])

  useEffect( () => {
    setAllFoods(foods)
  }, [foods])


const [foodId, setFoodId] = useState(null)
const [foodUpdate, setFoodUpdate] = useState({})


const handlePopup = (id) => {
  document.getElementById('my_modal_3').showModal()
  setFoodId(id)
  const food = foods.find(food => food._id == id)
  setFoodUpdate(food)
}

const handleFoodUpdate = e => {

    e.preventDefault()
    const form = e.target
    console.log(foodId)

    const foodName = form.foodName.value
    const foodImage = form.foodImage.value
    const foodQuantity = form.foodQuantity.value
    const pickupLocation = form.pickupLocation.value
    const expiredDateTime = form.expiredDateTime.value
    const status = form.status.value
    const additionalNote = form.additionalNotes.value

    const updateFood = {foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, status, additionalNote}
    console.log(foodId)

    fetch(`http://localhost:5000/updateFood/${foodId}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(updateFood)
        })
        .then(res => res.json())
        .then(data => {
          toast("The Food Update Successfully");
          setUpdateDependency(foodName)
        })

}


const handleDelete = (id) => {

  // const test = confirm('If you click "OK" this food will be remove permanently')
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this food!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        const remainingFoods = foods.filter(food => food._id !== id)
        setAllFoods(remainingFoods)
        swal("Your Food has been deleted!", {
          icon: "success",
        });
    })

      
    }
  });
}

  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Food Name</StyledTableCell>
                    <StyledTableCell align="center">Image</StyledTableCell>
                    <StyledTableCell align="center">Quantity</StyledTableCell>
                    <StyledTableCell align="center">Expire Date</StyledTableCell>
                    <StyledTableCell align="right">Manage</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        allFoods.map(food => <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                            {food.foodName}
                            </StyledTableCell>
                            <StyledTableCell align="center"><img src={food.foodImage} alt="" className='w-14 h-14 rounded-md inline' /></StyledTableCell>
                            <StyledTableCell align="center">{food.foodQuantity}</StyledTableCell>
                            <StyledTableCell align="center">{food.expiredDateTime}</StyledTableCell>
                            <StyledTableCell align="right">
                                <div className='flex justify-end gap-3'>
                                    <button onClick={() => handlePopup(food._id)} className='primary-bg p-2 rounded-md text-white text-base'><FaRegPenToSquare></FaRegPenToSquare></button>
                                    <button onClick={() => handleDelete(food._id)} className='secondary-bg p-2 rounded-md text-white text-base'><AiOutlineDelete></AiOutlineDelete></button>
                                    <button><Link to={`/manageRequest/${food._id}`}><button className='primary-bg p-2 rounded-md text-white text-base'><MdManageHistory></MdManageHistory></button></Link></button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
        
        <dialog id="my_modal_3" className="modal bg-[#000000b8]">
            <div className="modal-box max-w-[75%]">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div>
                <form onSubmit={handleFoodUpdate} className='backdrop-blur-sm bg-white/30 backdrop-brightness-50 p-5 md:p-8 mt-5 lg:p-20 rounded-md'>
                    <h1 className='text-center text-5xl bg-white mb-10 rounded-md py-3'>Update Food</h1>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="foodName" name="foodName" placeholder="Food Name" defaultValue={foodUpdate?.foodName} required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="url" id="foodImage" name="foodImage" placeholder="Food Image (URL)" defaultValue={foodUpdate?.foodImage} required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="number" id="foodQuantity" name="foodQuantity" placeholder="Food Quantity" defaultValue={foodUpdate?.foodQuantity} required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="pickupLocation" name="pickupLocation" placeholder="Pickup Location" defaultValue={foodUpdate?.pickupLocation} required/>

                        <select name="status" id="" className='rounded-md text-lg px-2 py-3 col-span-2'>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="date" id="expiredDateTime" name="expiredDateTime" placeholder="Expired Date/Time" defaultValue={foodUpdate?.expiredDateTime} required/>

                        

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="url" id="donatorImage" name="donatorImage" placeholder="Donator Image (URL)" value={user.photoURL} required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="donatorName" name="donatorName" value={user.displayName} readOnly/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="email" id="donatorEmail" name="donatorEmail" value={user.email} readOnly/>

                        <input className='rounded-md text-lg px-2 py-3' type="hidden" id="foodStatus" name="foodStatus" value="available"/>

                        
                    </div>
                    <br />
                    <div>
                        <textarea className='w-full rounded-md text-lg px-2 py-3' id="additionalNotes" name="additionalNotes" placeholder="Additional Notes" value={foodUpdate?.additionalNote}></textarea>
                        <input type="submit" value="Update Food" className='secondary-bg cursor-pointer text-white text-lg px-8 py-2 rounded-md mt-3' />
                    </div>
                </form>
                </div>
            </div>
        </dialog>
        <ToastContainer></ToastContainer>
    </div>

  );
}

