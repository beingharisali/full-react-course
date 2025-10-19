import React from 'react'

function PropsComponent() {
  return (
    <div>
      <h1>Props Topic</h1>
      <Card title="Card 1" description="This is just a description of card 1"/>
      <Card title="Card 2" description="Hey this is random description"/>
    </div>
  )
}

export default PropsComponent

function Card(props) {
  console.log(props)
  
  return <div style={{border:'1px solid black', padding:'10px', borderRadius:'5px', width:"300px", boxShadow:'5px 5px 5px gray'}}>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
}