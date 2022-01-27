import * as React from 'react';
import TextField from '@mui/material/TextField';


const Textinput = (props) => {
  return(
    <TextField
    fullWidth={true}
    label={props.label}
    margin={"dense"}
    multiline={props.multiline}
    rows={props.rows}
    value={props.value}
    type={props.type}
    onChange={props.onChange}
    id="outlined-basic" variant="outlined" />
  )
}


export default Textinput;