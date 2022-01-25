import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  button: {
    borderColor: '#FFB549',
    color: '#FFB549',
    fontweight: 600,
    marginBottom: '8px',
    "&:hover": {
      borderColor: '#FFB549',
      backgroundColor: '#FFB549',
      color: '#fff'
    }
  },
})

const Answer = (props) => {
  const classes = useStyles()

  return(
    <Button 
    className={classes.button}
    variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  )

}

export default Answer;