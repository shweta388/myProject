import React from 'react';
import './App.css';
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';
import Myprofile from './myprofile';
import refresh from "./refresh"
function App() {
  const myprofile={
    firstName:"Shweta",
    lastName:"S",
    email:"s@gmail.com"
  }

  sessionStorage.setItem("profile",JSON.stringify(myprofile))
  return (
    <div className="App">
     <Provider theme={defaultTheme}>
       <Myprofile />
 
    </Provider>
    </div>
  );
}

export default App; 
