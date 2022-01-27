import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Textinput from "./Textinput";


export default class FormDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      description: ""
    }

    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputDescription = this.inputDescription.bind(this)
  }

inputName = (event) => {
  this.setState({name: event.target.value})
}
inputEmail = (event) => {
  this.setState({email: event.target.value})
}
inputDescription = (event) => {
  this.setState({description: event.target.value})
}


  render(){
    return(
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Textinput
            label={"名前"} multiline={false} 
            value={this.state.name} type={"text"} onChange={this.inputName}
            />
            <Textinput
            label={"メールアドレス"} multiline={false}
            value={this.state.email} type={"email"} onChange={this.inputEmail}
            />
            <Textinput
            label={"お問い合わせ内容"} multiline={true} rows={5}
            value={this.state.description} type={"text"} onChange={this.inputDescription}
            />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>キャンセル</Button>
          <Button onClick={this.props.handleClose} autoFocus>
            送信
          </Button>
        </DialogActions>
      </Dialog>



    )
  }
}