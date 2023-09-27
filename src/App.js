import { useState } from "react";
import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";


function App() {

  const [mode, setMode] = useState('light')
  const [modeType, setModeType] = useState('Day')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='black';
      setModeType('Night')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      setModeType('Day')
    }
  }

  return (
    <>
    <Navbar toggleMode={toggleMode} mode={mode} modeType={modeType}/>
    <ToDoList mode={mode}/>
    </>
  );
}

export default App;
