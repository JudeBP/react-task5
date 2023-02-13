import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { onUpdateEmployee, onRemoveEmployee } from '../action'

const fixedItemUpdate = {
    name: "Rick Astley",
    age: 10,
    dateHired: "December 25, 2020",
    designation: 'Music'
}

class ClassTable extends Component {


    // Update the item
    updateItem = (index) => {
        this.props.updateEmployee(this.props.employees, fixedItemUpdate, index);
        // console.log(index);
    }

    // Remove the item 
    removeItem = (index) => {
        this.props.removeEmployee(this.props.employees, index);
    }

    render() {
        return (
            <>
                <h4>Class Based</h4>
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
                            {this.props.employees.map((row, index) => (
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
                                        <Button onClick={() => { this.updateItem(index) }} variant="outlined" sx={{ margin: '5px' }}>Update</Button>
                                        <Button onClick={() => { this.removeItem(index) }} variant="contained" sx={{ margin: '5px' }}>Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </>
        )
    }
}

// State
const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

// Dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        updateEmployee: (employees, item, index) => { dispatch(onUpdateEmployee(employees, item, index)) },
        removeEmployee: (employees, index) => { dispatch(onRemoveEmployee(employees, index)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassTable)
