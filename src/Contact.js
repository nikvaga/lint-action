import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Contact() {
  const [count, setCount] = useState(0)
  let a = 10
  
  useEffect(()=>{
    setCount(count+1)
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hey Contact with me okay for me on this number...
        </p>
        {logo}
      </header>
    </div>
  );
}

export default Contact;
