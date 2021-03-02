import React, { useState, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { Button, FormControl, MenuItem, InputLabel, Select, InputBase } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        width: '30%',
    },
    container: {
        maxHeight: 440,
    },
}));

export const Tables = () => {
    const classes = useStyles();
    const handleDrag = (event) => {
        console.log(event.x, event.y)
    }
    //hcp
    const [page1, setPage1] = React.useState(0);
    const [rowsPerPage1, setRowsPerPage1] = React.useState(10);
    const handleChangePage1 = (event, newPage) => {
        setPage1(newPage);
    };
    const handleChangeRowsPerPage1 = (event) => {
        setRowsPerPage1(+event.target.value);
        setPage1(0);
    };
    const [hcp, sethcp] = React.useState([])
    //hco
    const [page2, setPage2] = React.useState(0);
    const [rowsPerPage2, setRowsPerPage2] = React.useState(10);
    const handleChangePage2 = (event, newPage) => {
        setPage2(newPage);
    };
    const [hco, sethco] = React.useState([])

    const handleChangeRowsPerPage2 = (event) => {
        setRowsPerPage2(+event.target.value);
        setPage2(0);
    };
    const handleCheckboxChange = (e) => {
        let option
        if (e.target.checked) {
            option = e.target.value
            setCheck(checkedItems => ([...checkedItems, option]));
        }
        if (!e.target.checked) {
            if (checkedItems.includes(e.target.value)) {
                var index = checkedItems.indexOf(e.target.value)
                checkedItems.splice(index, 1);
            }
        }
    }

    const [checkedItems, setCheck] = useState([]);

    return (
        <div>
            <Paper className={classes.root} style={{ float: "left" }}>
                <p>HCP CUSTOMERS</p>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow >
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>Customer ID</StyledTableCell>
                                <StyledTableCell>Customer Name</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow >
                        </TableHead>
                        <TableBody>
                            {hcp.slice(page1 * rowsPerPage1, page1 * rowsPerPage1 + rowsPerPage1).map((item, index) => {
                                return (
                                    <Draggable onDrag={handleDrag}>
                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <StyledTableCell align="left">{index + 1}</StyledTableCell >
                                            <StyledTableCell align="left">{item.custId}</StyledTableCell >
                                            <StyledTableCell align="left">{item.cust_name}</StyledTableCell >
                                            <StyledTableCell><input value={item.custId} style={{ alignContent: "center" }}
                                                type="checkbox" onChange={handleCheckboxChange} /></StyledTableCell>
                                        </StyledTableRow >
                                    </Draggable>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={hcp.length}
                    rowsPerPage={rowsPerPage1}
                    page={page1}
                    onChangePage={handleChangePage1}
                    onChangeRowsPerPage={handleChangeRowsPerPage1}
                />
            </Paper>

            <Paper className={classes.root} style={{ float: "right" }}>
                <p>HCO CUSTOMERS</p>

                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <StyledTableRow >
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>ID</StyledTableCell>
                                <StyledTableCell>Org Name</StyledTableCell>
                                <StyledTableCell></StyledTableCell>
                            </StyledTableRow >
                        </TableHead>
                        <TableBody>
                            {hco.slice(page2 * rowsPerPage2, page2 * rowsPerPage2 + rowsPerPage2).map((item, index) => {
                                return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <StyledTableCell align="left">{index + 1}</StyledTableCell >
                                        <StyledTableCell align="left">{item.custId}</StyledTableCell >
                                        <StyledTableCell align="left">{item.cust_name}</StyledTableCell >
                                        <StyledTableCell><input value={item.custId} style={{ alignContent: "center" }}
                                            type="checkbox" onChange={handleCheckboxChange} /></StyledTableCell>
                                    </StyledTableRow >
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={hco.length}
                    rowsPerPage={rowsPerPage2}
                    page={page2}
                    onChangePage={handleChangePage2}
                    onChangeRowsPerPage={handleChangeRowsPerPage2}
                />
            </Paper>
        </div>
    )
}
