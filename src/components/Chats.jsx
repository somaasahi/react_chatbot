import * as React from 'react';
import List from '@mui/material/List';
import {Chat} from './index';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  chats: {
    height: 400,
    padding: '0',
    overflow: 'auto'
  }
})


const Chats = (props) => {
  const classes = useStyles()

  return (
    <List className={classes.chats}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
      })}
    </List>
  )

}

export default Chats;