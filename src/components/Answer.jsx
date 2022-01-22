import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const Answer = (props) => {

  return(
    <Button variant="contained">
      {props.content}
    </Button>
  )

}

export default Answer;