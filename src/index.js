import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore ,createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

// Ye extension hame yaad rakni hai 
import { composeWithDevTools} from 'redux-devtools-extension'
var firebaseConfig = {
    apiKey: "AIzaSyAUH73_7vo23UOCee6vP3ATfW8teQfoZ9Q",
    authDomain: "resume-builder-ea22f.firebaseapp.com",
    databaseURL: "https://resume-builder-ea22f-default-rtdb.firebaseio.com",
    projectId: "resume-builder-ea22f",
    storageBucket: "resume-builder-ea22f.appspot.com",
    messagingSenderId: "632042874106",
    appId: "1:632042874106:web:534c11ec951fd29a029543",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase) // redux bindings for firestore,
  )
);
ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);