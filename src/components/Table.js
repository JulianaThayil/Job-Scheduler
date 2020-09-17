import React, { useState } from 'react';
import moment from 'moment';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

//custom
import Dialog from "./Dialog";

//icons
import LowPriorityIcon from '@material-ui/icons/LowPriority';

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
        width: 'fit-content',
        padding: 100
    },
});

const CustomizedTables = (props) => {
    const classes = useStyles();
    const { jobs } = props;
    const [selectedJob, setSelectedJob] = useState();

    //Dialog state and handlers
    const [open, setOpen] = useState(false);

    const handleDialogClose = () => {
        setOpen(false);
    };
    const handleDialogOpen = (job) => {
        setSelectedJob(job);
        setOpen(true);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >Actions</StyledTableCell>
                        <StyledTableCell >Start On</StyledTableCell>
                        <StyledTableCell >Tasks</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {jobs.map((job) => (
                        <StyledTableRow key={job.startOn}>

                            <StyledTableCell>
                                <IconButton
                                    onClick={() => handleDialogOpen(job.startOn)}
                                    color="primary"
                                    label="postpone">
                                    <LowPriorityIcon />
                                </IconButton>

                                <Dialog jobs={jobs} selectedJob={selectedJob} open={open} handleDialogClose={handleDialogClose} />
                            </StyledTableCell>

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
    );
}
export default CustomizedTables;