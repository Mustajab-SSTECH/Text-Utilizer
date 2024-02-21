//import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Formtext from './components/Formtext';
import './App.css';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [alert, setAlert] = useState(null);

  const [containerStyle, setcontainerStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const handleSwitchButton = () => {
    if (containerStyle.backgroundColor === 'black') {
      setcontainerStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      showAlert("Light mode has been enabled", "success");
      alertTimeOut();
    }
    else {
      setcontainerStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      showAlert("Dark mode has been enabled", "success");
      alertTimeOut();
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  }

  const alertTimeOut = () => {
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  return (
    <Router>
      <>
        <Navbar title="TextUtilizer" homeText="Home" aboutText="About" contactText="Contact" handleSwitchButton={handleSwitchButton} showAlert={showAlert} />
        <Alert alert={alert} style={containerStyle} />
        <Routes>
          <Route exact path="/about" element={<About style={containerStyle} />}></Route>
          <Route exact path="/contact" element={<Contact style={containerStyle} />}></Route>
          <Route path="/" element={<Formtext heading="Enter the text to Analyze" style={containerStyle} showAlert={showAlert} alertTimeOut={alertTimeOut} />} ></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;