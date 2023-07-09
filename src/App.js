
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';


const removeBodyClasses=()=>{
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
}
const togg=(cls)=>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls);
}

let name = "Harshit";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
      document.title = 'Textutils-Dark'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success");
      document.title = 'Textutils-Light'
    }
  }



  return (
    <>
      <Navbar title="Textutils" aboutText="ABOUT US" mode={mode} togglemode={togglemode} togg={togg}/>
      <Alert alert={alert} />
      
      
        <Textform showAlert={showAlert} heading="TextUtils- Word Counter, Character Counter, Clear Text, Upper and Lower Case Text Converter" mode={mode} />
    </>
  );
}

export default App;


//EVERYTHING WRITTEN FROM LINE 5 TO 22 IS JSX
//FOR WRITING CLASS WE USE className IN CASE OF JSX
//FOR WRITING FOR (EXAMPLE IN <label for="abcd">) WE USE htmlFor KEYWORD
//WE CAN RETURN ONLY ONE ELEMENT AND NOT MORE THAN ONE IN JSX.(HERE WE HAVE RETURNED div)
//IN CASE WE WANT TO RETURN MORE THAN ONE ELEMENT, WE WILL USE JSX ELEMENT  i.e,<> and </>. ALL THE CONTENT(EVERYTHING) WILL BE INCLUDED IN <> AND </>
//WE USE CURLY BRACES {} FOR THE PURPOSE OF JAVASCRIPT CONTENT
//WE USE / AT THE END OF NON CLOSING TAGS. LOOK AT IMG TAG FOR EXAMPLE
//<div className="container">
          
          
//</div >

