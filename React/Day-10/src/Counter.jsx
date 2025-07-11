

import React, { useEffect } from 'react'

const Counter = ({count,data}) => {


    useEffect(() => {
        console.log("mount phase only");
    },[])



     useEffect(() => {
        console.log("Update phase only");
    },[])


    useEffect(() => {
        return ()=> {
        console.log("Unmount phase only");
        }
    },[])



  return (
    <div>
      <h1> Counter Value {count}</h1>
      <h1>Data Value {data}</h1>
    </div>
  )
}

export default Counter;
