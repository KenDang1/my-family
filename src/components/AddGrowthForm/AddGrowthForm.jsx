import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Input from '@mui/material/Input';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import BackupIcon from '@mui/icons-material/Backup';
import CancelBtn from '../MemberInfo/CancelBtn';

function AddGrowthForm () {
    const memberId = useParams();
    console.log('addGrowth member id', memberId.idM);
    const dispatch = useDispatch();
    const history = useHistory();

    const [newMeasure, setNewMeasure] = useState({
        age: '', 
        height: '', 
        weight: '',
        date: '',
    });

    const handleChange = (evt, property) => {
        setNewMeasure({...newMeasure, [property]: evt.target.value})
    };

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1)
        },
        leftIcon: {
            marginRight: theme.spacing(1)
        },
        rightIcon: {
            marginLeft: theme.spacing(1)
        },
        iconSmall: {
            fontSize: 20
        },
        root: {
            padding: theme.spacing(3, 2)
        },
        container: {
            display: "flex",
            flexWrap: "wrap"
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200
        }
    }));


    const addNewMeasure = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_NEW_MEASURE',
            payload: {
                newMeasure: newMeasure,
                memberId: memberId.idM
            }
        })
        history.push(`/memberDetails/${memberId.idM}`);
    };

    return (
        <div>
        <Paper className="container">
            <form onSubmit={addNewMeasure}>
                <Input
                    required
                    type='integer'
                    placeholder="Height"
                    value={newMeasure.height}
                    onChange={(evt) => handleChange(evt, "height")}
                />
                <br />
                <Input
                    required
                    type='integer'
                    placeholder="Weight"
                    value={newMeasure.weight}
                    onChange={(evt) => handleChange(evt, "weight")}

                />
                <br />
                <Input
                    required
                    type='Date'
                    placeholder="Date"
                    value={newMeasure.date}
                    onChange={(evt) => handleChange(evt, "date")}
                />
                <br />
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    size="small"
                >
                <BackupIcon xs={8}/>
                </Button>
            </form>
            <CancelBtn 
                type="toDetails"
                memberId={memberId.idM}
            />
        </Paper>
    </div>
    )
}; // end of AddGrowthForm

export default AddGrowthForm;