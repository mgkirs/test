import * as Firebase from 'firebase';
const config = {
	    apiKey: "AIzaSyAM8DAnF1XvaIM7KvJkxIFrHROkRpnCq0U",
	    authDomain: "chat-45a96.firebaseapp.com",
	    databaseURL: "https://chat-45a96.firebaseio.com",
	    projectId: "chat-45a96",
	    storageBucket: "chat-45a96.appspot.com",
	    messagingSenderId: "709956613547"
	  };

Firebase.initializeApp(config);
export default Firebase;