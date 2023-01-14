import { useState } from 'react'
function RobotForm (props) {
    const { onAdd } = props
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [mass, setMass] = useState('')

    const add = (evt) => {
        onAdd({
            name,
            type,
            mass
        })
        setName('')
        setType('')
        setMass('')
    }
    return (
      <div id = {props.id}>
        <p>Robot form</p>
        <label for="name">Name:</label>
        <br></br>
        <input type="name" id="name"  value={name}  onChange={event=>setName(event.target.value)} />
        <br></br>
        <label for="type">Type:</label>
        <br></br>
        <input type="text" id="type"  value={type}  onChange={event=>setType(event.target.value)} />
        <br></br>
        <label for="mass">Mass:</label>
        <br></br>
        <input type="text" id="mass"  value={mass}  onChange={event=>setMass(event.target.value)} />
        <br></br>
        <br></br>
        <input
          type="button"
          value="add"
          onClick={add}
        />
        
      </div>
    )
  }
  
  export default RobotForm
  