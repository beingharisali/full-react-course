import React, { useState } from 'react'

function Counter() {
    const [value, setValue] = useState(1)

  return (
    <div>
      <h1>Counter</h1>
      <h1>{value}</h1>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      <button onClick={()=>setValue(1)}>Reset</button>
      <button onClick={()=>{
if (value===1) {
    alert("You've reached the minimum limit")
    setValue(1)
}
else{
    setValue(value-1)
}

      }}>Decrement</button>
    </div>
  )
}

export default Counter
