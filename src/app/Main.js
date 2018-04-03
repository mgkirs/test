/**
 * In this file, we create a React component which incorporates components
 * provided by Material-UI.
 */

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
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Firebase from './Firebase';

const styles2 = {
		  root: {
		    display: 'flex',
		    flexWrap: 'wrap',
		    justifyContent: 'space-around',
		  },
		  gridList: {
		    width: 500,
		    height: 450,
		    overflowY: 'auto',
		  },
		};


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

	    var tilesData = [
	      	  {
	      		id: '1',
	      		  	msg: 'images/grid-list/00-52-29-429_640.jpg',
	      		  	time: 'Breakfast',
	      		  	author: 'jill111',
	      	  },
	      	  {
	      		id: '2',
	      		    msg: 'images/grid-list/00-52-29-429_640.jpg',
	      		    time: 'Breakfast',
	      		    author: 'jill111',
	      	  },
	      	  {
	      		id: '3',
	      		    msg: 'images/grid-list/00-52-29-429_640.jpg',
	      		    time: 'Breakfast',
	      		    author: 'jill111',
	      	  },
	      	  {
	      		id: '4',
	      		    msg: 'images/grid-list/00-52-29-429_640.jpg',
	      		    time: 'Breakfast',
	      		    author: 'jill111',
	      	  },
	      	  {
	      		id: '5',
	      		    msg: 'images/grid-list/00-52-29-429_640.jpg',
	      		    time: 'Breakfast',
	      		    author: 'jill111',
	      	  }
	      	]

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      messages: [],
      textFieldValue: ''
    };
  }
  
  componentWillMount(){
	    let messagesRef = Firebase.database().ref('messages').orderByKey().limitToLast(100);
	    messagesRef.on('child_added', snapshot => {
	      let message = { text: snapshot.val(), id: snapshot.key };
	      this.setState({ messages: [message].concat(this.state.messages) });
	    })
	  }
  
  addMessage(e){
	    alert(this.state.textFieldValue);
	    Firebase.database().ref('messages').push(this.inputEl.value);
	    this.inputEl.value = '';
	  }

  saveMessage(e) {
	  this.setState({
		  textFieldValue: e.target.value   
	  })
	  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Material-UI</h1>
          <h2>Чат</h2>
          <TextField
          id = 'message'
          value = {this.state.textFieldValue}
          onChange = {this.saveMessage}
          ref = { el => this.inputEl = el }
          multiLine = {true}
          rows = {2}
          rowsMax = {4}
        /><br/>
          <RaisedButton
            label = "Отправить"
            secondary = {true}
            onClick = {this.addMessage}
          />
          <br/>//{this.addMessage.bind(this)}
          <Paper style={{maxHeight: 400, overflow: 'auto'}} zDepth={1}>
          <List>

          { /* Render the list of messages */
              this.state.messages.map(tile => (
                    <ListItem  key={tile.id}
                  	primaryText={tile.text}
                  	/*secondaryText={tile.id}*/
                  	/>
                ))
          }
        
          </List>
        </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;

