import {ways} from '../data.js'
import WayToTeach from './WayToteach'

export default function   WasabiSet(){
return (
<section>
  <h3> Moy podhod k obushenie</h3>
  <ul>
  {ways.map((way) => (
    <WayToTeach key={way.title} {...way} />
))}



{/*<WayToTeach title={ways[0].title} description = {ways[0].description} />
<WayToTeach {...ways[1]} />
<WayToTeach {...ways[2]} />
<WayToTeach {...ways[3]} />*/}


  </ul>
  
  </section> 







)







}
