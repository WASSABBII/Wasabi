import {differences } from '../data.js';
import Button from './Button/Button.jsx';
import { useState } from 'react';





export default function DefferencesSection(){
    const [contentType,setContentType] =  useState(null)
    function handleClick(type){
        setContentType(type) }
return(
<section>
    
    <Button isActive={contentType === 'put'} onClick={() => handleClick('put')}>
  Podhod
</Button>
<Button isActive={contentType === 'prostoi'} onClick={() => handleClick('prostoi')}>
  Dostupnost
</Button>
<Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>
  Konsentrasia
</Button>

  
    {/*!contentType ? ( <p>Nazhmi na knopku</p> ):null */}
    {/*contentType ? (<p>{differences[contentType]}</p>):null */}
   {!contentType &&  ( <p>Nazhmi na knopku</p>)  }
   {contentType &&  ( <p>{differences[contentType]}</p>) }
  
  </section>
  




)






}