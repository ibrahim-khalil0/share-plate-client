import * as React from 'react';
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


export default function CustomizedTables({foods}) {

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
                        foods.map(food => <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                            {food.foodName}
                            </StyledTableCell>
                            <StyledTableCell align="center"><img src={food.foodImage} alt="" className='w-14 h-14 rounded-md inline' /></StyledTableCell>
                            <StyledTableCell align="center">{food.foodQuantity}</StyledTableCell>
                            <StyledTableCell align="center">{food.expiredDateTime}</StyledTableCell>
                            <StyledTableCell align="right">
                                <div className='flex justify-end gap-3'>
                                    <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='primary-bg p-2 rounded-md text-white text-base'><FaRegPenToSquare></FaRegPenToSquare></button>
                                    <button className='secondary-bg p-2 rounded-md text-white text-base'><AiOutlineDelete></AiOutlineDelete></button>
                                    <button><Link to={'/manageRequest/1'}><button className='primary-bg p-2 rounded-md text-white text-base'><MdManageHistory></MdManageHistory></button></Link></button>
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
                <form className='backdrop-blur-sm bg-white/30 backdrop-brightness-50 p-5 md:p-8 mt-5 lg:p-20 rounded-md'>
                    <h1 className='text-center text-5xl bg-white mb-10 rounded-md py-3'>Update Food</h1>
                    <div className='grid md:grid-cols-2 gap-8'>
                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="foodName" name="foodName" placeholder="Food Name" required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="url" id="foodImage" name="foodImage" placeholder="Food Image (URL)" required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="number" id="foodQuantity" name="foodQuantity" placeholder="Food Quantity" required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="pickupLocation" name="pickupLocation" placeholder="Pickup Location" required/>

                        <select name="" id="" className='rounded-md text-lg px-2 py-3 col-span-2'>
                            <option>Available</option>
                            <option>Not Available</option>
                        </select>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="datetime-local" id="expiredDateTime" name="expiredDateTime" placeholder="Expired Date/Time" required/>

                        

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="url" id="donatorImage" name="donatorImage" placeholder="Donator Image (URL)" required/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="text" id="donatorName" name="donatorName" value="John Doe" readOnly/>

                        <input className='rounded-md text-lg px-2 py-3 col-span-2 md:col-span-1' type="email" id="donatorEmail" name="donatorEmail" value="john@example.com" readOnly/>

                        <input className='rounded-md text-lg px-2 py-3' type="hidden" id="foodStatus" name="foodStatus" value="available"/>

                        
                    </div>
                    <br />
                    <div>
                        <textarea className='w-full rounded-md text-lg px-2 py-3' id="additionalNotes" name="additionalNotes" placeholder="Additional Notes"></textarea>
                        <input type="submit" value="Add Food" className='secondary-bg text-white text-lg px-8 py-2 rounded-md mt-3' />
                    </div>
                </form>
                </div>
            </div>
        </dialog>
    </div>

  );
}

