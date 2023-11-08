import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

const arr = [1, 2, 3, 4, 5]


export default function ManageRequestTable() {
  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>SR</StyledTableCell>
                    <StyledTableCell align='center'>Requester Name</StyledTableCell>
                    <StyledTableCell align="center">Requester Image</StyledTableCell>
                    <StyledTableCell align="center">Requester Email</StyledTableCell>
                    <StyledTableCell align="center">Request Time and Date</StyledTableCell>
                    <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        arr.map(item => <StyledTableRow>
                            <StyledTableCell>{item}</StyledTableCell>
                            <StyledTableCell component="th" scope="row" align='center'>
                            namekkkkkkkkkkkkkkkkkkjjjjjjjjjjjj
                            </StyledTableCell>
                            <StyledTableCell align="center">b</StyledTableCell>
                            <StyledTableCell align="center">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</StyledTableCell>
                            <StyledTableCell align="center">d</StyledTableCell>
                            <StyledTableCell align="right">
                                <form>
                                    <select name="" id="" className='bg-[#00000000]'>
                                        <option value="Pending">Pending</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Delivered">Canceled</option>
                                    </select>
                                    <input className='primary-bg text-[10px] cursor-pointer text-white rounded-full p-1' type="submit" name="" value="OK" id="" />
                                </form>
                            </StyledTableCell>
                        </StyledTableRow>)
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>

  );
}

