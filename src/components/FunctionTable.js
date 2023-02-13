import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { onUpdateEmployee, onRemoveEmployee } from '../action'

const fixedItemUpdate = {
  name: "Rick Astley",
  age: 10,
  dateHired: "December 25, 2020",
  designation: 'Music'
}

const FunctionTable = () => {

  // Initializing actions
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  // Update Item
  const updateEmployee = (index) => {
    dispatch(onUpdateEmployee(employees, fixedItemUpdate, index))
  }

  // Remove Item
  const removeEmployee = (index) => {
    dispatch(onRemoveEmployee(employees, index));
  }

  return (
    <>
      <h4>Function Based</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Date Hired</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.designation}</TableCell>
                <TableCell align="right">{row.dateHired}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => {updateEmployee(index) }} variant="outlined" sx={{ margin: '5px' }}>Update</Button>
                  <Button onClick={() => {removeEmployee(index) }} variant="contained" sx={{ margin: '5px' }}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  )
}

export default FunctionTable