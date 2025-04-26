import { useState } from 'react';
import Button from './Button/Button';
import WasabiSet from './WasabiSet';
import DefferencesSection from './DefferencesSection';
function StateVsRef(){
    const [ value, setValue] = useState (' ')
    const [show , setShow] = useState(false)
function handleKeyDown (event){
    if(event.key === 'Enter'){
        setShow(true)
    }
    




}
return(
<div>

<h3>Input value: {show && value }</h3>
<input type="text" className='control'
value=  {value} 
onKeyDown={handleKeyDown}
onChange={(e)=>setValue (e.target.value)}
/>
 

</div>




)



}



export default function FeedbackSection() {
    const[form,setForm ] = useState({
name:' ',
hasError : false,
reason : 'help'
}
)
  //const [name, setName] = useState('');
  //const [hasError, setHasError] = useState(false);
  //const [reason, setReason] = useState('help') ;


 
  function handleNameonChange(event) {
    const value = event.target.value;
    //setName(value);
    //setHasError(value.trim().length === 0); // ← исправил тут "length"
setForm( (prev) => ({ ...prev,
    name : value,
    hasError : value.trim().length === 0,


} )






)
}

function ToggleError(){


}

  return (
    <section>
      <h3>Feedback</h3>
      <Button onClick={ToggleError}  >ToggleError  </Button>
      <form style={{marginBottom: '1rem'}}>
        <label htmlFor="name">Your first name:</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          onChange={handleNameonChange}
          style={{
            border: form.name.trim().length === 0 ? (form.hasError ? '1px solid red' : '') : null

          }}
        />

        <label htmlFor="reason">The reason for the appeal:</label>
        <select
          id="reason" // ← тут тоже была опечатка, было id="reson"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              reason: event.target.value,
            }))
          }
          
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="suggest">Suggest</option>
        </select>
      

      
      <pre>
  {JSON.stringify(form, null, 2)}
</pre>

      

      <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
      
      </form>
      <hr />
      <StateVsRef />
      <WasabiSet/>
      <DefferencesSection/>
    </section>
  );
}
