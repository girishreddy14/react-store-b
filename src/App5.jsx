import React, { useState } from 'react'
import "./App5.css"
export default function App5() {
    const [count,setCount] = useState(0);
    const handleSubmit = () => {
        setCount(count+1)
    }
  return (
    <div className="container">
        <div>
            <div>{count}</div>
            <button onClick={handleSubmit}>click</button>
        </div>
    </div>
  )
}
