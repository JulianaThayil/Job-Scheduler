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
        selectedJob,
        jobs,
        setJobs
    } = props
    const [days, setDays] = useState();
    const [state, setState] = useState(jobs);

    const handleDaysChange = (event) => {
        (event.target.value > 0) && setDays(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //to prevent auto reload
        //add main logic here
        handleDialogClose();
    }

    return (
        <div>
            <Dialog
                onClose={handleDialogClose}
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleDialogClose}>
                    Postpone job scheduled for {moment(selectedJob).format('dddd')}  {selectedJob}  by :
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
                            color="primary"
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

export default connect(null, { setJobs })(CustomDialog);