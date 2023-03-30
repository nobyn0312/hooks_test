import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import  './App.css'

const App = () => {
  const [count,setCount] =useState(0);
  useEffect(()=>{
    console.log(`useEffect発火`)
  })

  return <div className="App">
    <h1>useEffect</h1>
    <p>{count}</p>
    <Button onClick={()=>setCount(count +1)}>＋</Button>
    <Button onClick={()=>setCount(count -1)}>−</Button>
  </div>;
};

export default App;
