import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import PropTypes from "prop-types";

//redux
import { connect } from 'react-redux';
import { setJobs } from '../redux/actions/index';

//muaterial-ui
import {
    Button,
    Dialog,
    DialogContent,
    IconButton,
    TextField,
    Typography
} from "@material-ui/core";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(5),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography >{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const CustomDialog = (props) => {
    const {
        open,
        handleDialogClose,
        jobs,
        weekends,
        setJobs
    } = props
    const [days, setDays] = useState();
    const [state, setState] = useState(jobs);

    const handleDaysChange = (event) => {
        (event.target.value > 0) && setDays(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //to prevent auto reload

        const HOLIDAY = ['2020-09-08'];

        jobs.map((job, index) => {
            var counter = 0, momentDate = moment(new Date(job.startOn));

            //postpones the job by n days only if its not a on a holiday nor a weekend
            if (!HOLIDAY.includes(momentDate.format('YYYY-MM-DD')) && !weekends.includes(momentDate.weekday())) {
                while (counter < days) {
                    momentDate = momentDate.add(1, 'days');

                    //skips postponing a job to a holiday or a weekend
                    if (!HOLIDAY.includes(momentDate.format('YYYY-MM-DD')) && !weekends.includes(momentDate.weekday())) {
                        counter++
                    }
                }

                //update the jobs state and set updated start date
                let newArr = [...state]
                newArr[index].startOn = momentDate.format('YYYY-MM-DD')
                setState(newArr)
            }
        })
        //const sortedJobs = state.sort((a, b) => new Date(a.startOn) - new Date(b.startOn));
        setJobs(state);//update the jobs state in redux store
        handleDialogClose(); //close dialog
    }

    return (
        <div>
            <Dialog
                onClose={handleDialogClose}
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
                    Skip Each job by :
                </DialogTitle>

                <DialogContent >
                    <form >
                        <TextField
                            type="number"
                            fullWidth
                            placeholder="days"
                            value={days}
                            onChange={handleDaysChange}
                        />
                        <br /><br />
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            color="secondary"
                        >
                            Postpone
                        </Button>
                    </form>
                </DialogContent>

            </Dialog>
        </div>
    );
};

CustomDialog.propTypes = {
    setJobs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        weekends: state.weekends,
    };
};

export default connect(mapStateToProps, { setJobs })(CustomDialog);