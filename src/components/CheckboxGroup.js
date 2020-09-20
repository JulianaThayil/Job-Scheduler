import React, { useState } from 'react';
import PropTypes from "prop-types";
import '../App.css';

//redux
import { connect } from 'react-redux';
import { setWeekends } from '../redux/actions/index';

//Material ui
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Checkboxes = (props) => {
    const { setWeekends } = props;

    const [state, setState] = useState({
        Saturday: false,
        Sunday: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); //to prevent auto reload
        const weekend = []
        if (state.Saturday === false) {
            weekend.push(6)
        }
        else if (state.Sunday === false) {
            weekend.push(0)
        }
        setWeekends(weekend);
    };

    const { Saturday, Sunday } = state;

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return (
        <div className="Checkboxes">
            <FormControl component="fieldset">
                <FormLabel component="legend">Customize working days and hit save</FormLabel>
                <FormGroup>
                    {weekdays.map((weekday => (
                        <FormControlLabel
                            control={<Checkbox checked={true} name={weekday} />}
                            label={weekday}
                        />
                    )))}
                    <FormControlLabel
                        control={<Checkbox checked={Saturday} onChange={handleChange} name="Saturday" />}
                        label="Saturday"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Sunday} onChange={handleChange} name="Sunday" />}
                        label="Sunday"
                    />
                    <Button onClick={handleSubmit}
                        variant="contained" color="secondary" size="small"> Save </Button>
                </FormGroup>
            </FormControl>

        </div>
    );
}

Checkboxes.propTypes = {
    setWeekends: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        weekends: state.weekends,
    };
};

export default connect(mapStateToProps, { setWeekends })(Checkboxes);