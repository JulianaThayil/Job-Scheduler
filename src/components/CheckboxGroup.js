import React, { useState } from 'react';
import '../App.css';

//Material ui
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Checkboxes = () => {

    //checkboxes
    const [state, setState] = useState({
        saturday: false,
        sunday: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { saturday, sunday } = state;

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return (
        <div className="Checkboxes">
            <FormControl component="fieldset">
                <FormLabel component="legend">Customize working days</FormLabel>
                <FormGroup>
                    {weekdays.map((weekday => (
                        <FormControlLabel
                            control={<Checkbox checked={true} name={weekday} />}
                            label={weekday}
                        />
                    )))}
                    <FormControlLabel
                        control={<Checkbox checked={saturday} onChange={handleChange} name="saturday" />}
                        label="Saturday"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={sunday} onChange={handleChange} name="sunday" />}
                        label="Sunday"
                    />
                    <Button variant="contained" color="secondary" size="small"> Save </Button>
                </FormGroup>
            </FormControl>

        </div>
    );
}

export default Checkboxes;