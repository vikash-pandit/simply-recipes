import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import React from 'react';
 import Counter from './Counter';
 
function App() {
  const [count,setCount] = useState(0);
  const [data,setdata] =   useState(0);
  const [display,setDisplay] = useState(true);



   return (
     <div>
      {
        display? <Counter count={count} data={data}></Counter>: null
      }
       
       <button onClick={() => setCount(count+1)}>Counter</button>
       <button onClick={() => setdata(data+1)}>Data</button>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
     </div>
   )
 }
 
 export default App;
 