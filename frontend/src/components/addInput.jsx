import { useState } from "react"
import getStates from "../services/getStates"
import putState from "../services/putState"
import '../css/addcontainer.css'

export default function AddContainer (props) {

  const [text, setText] = useState('')
  const [error, setError] = useState(null)

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = async () => {
    const res = await putState(text);
    if (res.state) {
      return setError(res.message);
    };
    setError(null)
    setText('');
    const req = await getStates();
    props.setStates(req);
  }

  let caseError = <p></p>
  error ? caseError = <p className="error">{error}</p> : caseError = <p></p>

  return (
    <section className="add-state-container">
      <p>Cadastrar um novo estado</p>
      <input type="text" placeholder="digite aqui" onChange={handleChange} value={text} />
      <button onClick={handleClick}>Enviar</button>
      {
        caseError
      }
  </section>
  )
}