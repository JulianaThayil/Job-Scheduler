import React from 'react';
import moment from 'moment';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//Material ui
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
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
        width: 'fit-content',
        padding: 100
    },
});

const CustomizedTables = (props) => {
    const classes = useStyles();
    const { jobs } = props;

    return (
        <TableContainer component={Paper}>
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
    );
}
export default CustomizedTables;