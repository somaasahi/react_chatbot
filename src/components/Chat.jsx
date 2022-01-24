import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import St from '../assets/img/mei.jpeg';
import Ga from '../assets/img/ga.jpeg';


const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
        <ListItemAvatar>
          {isQuestion ? (
            <Avatar alt="icon" src={Ga} />
          ) : (
            <Avatar alt="icon" src={St} />
          )}
          
        </ListItemAvatar>
        <div className="p-chat__bubble">
          {props.text}
        </div>
    </ListItem>
  )

}

export default Chat;