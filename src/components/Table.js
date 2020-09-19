import React, { useState } from 'react';
import Dialog from './Dialog';
import Checkboxes from './CheckboxGroup';
import '../App.css';

import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

import moment from 'moment';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//redux
import { connect } from 'react-redux';

//Material ui
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Divider,
} from '@material-ui/core';

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


const useStyles = makeStyles({
    table: {
        minWidth: 'fit-content',
        padding: 200,
        backgroundColor: 'white',

    },
});

const CustomizedTables = (props) => {
    const classes = useStyles();
    const [jobs, setJobs] = useState(props.jobs);

    //dialog state and handlers
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
        setOpen(false);
    };
    const handleDialogOpen = (job) => {
        setOpen(true);
    };

    return (
        <div className="Table" >

            <div className="Settings">
                <Button onClick={handleDialogOpen} variant="contained" color="secondary">
                    Skip each Job by n days
                            </Button>
                <Dialog handleDialogClose={handleDialogClose} open={open}> </Dialog>
                <Checkboxes />
            </div>

            <TableContainer >
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >Start On</StyledTableCell>
                            <StyledTableCell >Tasks</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {jobs.map((job) => (
                            <StyledTableRow key={job.startOn}>

                                <StyledTableCell component="th" scope="row">
                                    {moment(job.startOn).format('dddd')} {job.startOn}
                                </StyledTableCell>

                                <StyledTableCell >{job.tasks.map((task) => (
                                    <div>
                                        {task}
                                        <Divider />
                                    </div>

                                ))}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}

CustomizedTables.propTypes = {
    jobs: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
    };
};

export default connect(mapStateToProps)(CustomizedTables);