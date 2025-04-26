import { useState } from "react"
import Button from "./Button/Button"
import Modual from "./Modal/Modal"
export default function EffectSection(){
    const[modal,setModal]=useState(false)
function openModal()
{
   setModal(true)

}
return(
<section>

<h3>Effect</h3>
<Button onClick = {openModal} >Open Information </Button>
<Modual open={modal} > 
    <h3>Hello from Modal</h3>
    <p>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. At unde vel dolores debitis! 
     Dolorem earum dolor consequuntur iusto, totam non, hic, nulla fugiat id at accusantium 
     soluta nam accusamus explicabo?   
    </p>
    </Modual>
</section>




)




}