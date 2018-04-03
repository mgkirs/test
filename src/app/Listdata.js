import * as firebase from "firebase";
import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

import Paper from 'material-ui/Paper';

class List extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.textFieldValue = this.textFieldValue.bind(this);
    this.tilesData = this.tilesData.bind(this);

    this.state = {
      open: false,
      textFieldValue: ''
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  handleTouchTap() {
	    this.setState({
	      open: true,
	    });
	  }
  
  sendMessage() {
	  this.textFieldValue;
  }
  
  updateLenta() {
	
  }
  
  handleMessage(e) {
      this.setState({
          textFieldValue: e.target.value
      });
  }
  
  render() {
	  
    const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <TextField

          value={this.state.textFieldValue}
          onChange={this.handleMessage}
          multiLine={true}
          rows={2}
          rowsMax={4}
        /><br/>
          <RaisedButton
            label="Отправить"
            secondary={true}
          	onTouchTap={this.sendMessage}
          />
          <br/>
          <Paper style={{maxHeight: 400, overflow: 'auto'}} zDepth={1} >
          <List>
          {tilesData.map((tile) => (
          <ListItem
          	primaryText={tile.msg}
          	secondaryText={tile.time + " " + tile.author}
          	/>
        ))}
        </List>
        </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}