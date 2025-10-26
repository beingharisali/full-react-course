import React, {useState} from 'react'

// 1- preserve a value
// 2- can re-render that value (initial state) by built it function

function UseStateComponent() {
    const [text, setText] = useState("Haris")
    function changeText() {
        if (text==='Haris') {
            setText('Ali')
        }
        else{
            setText('Haris')
        }
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1>useState Component</h1>
      <h1>{text}</h1>
      <button onClick={changeText}>Click</button>
    </div>
  )
}

export default UseStateComponent
