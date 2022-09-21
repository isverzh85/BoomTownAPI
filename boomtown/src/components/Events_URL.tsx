import React, {useEffect, useState} from 'react'
import axios from 'axios'

export interface Events {
    type?: string;
    id: number;
    name: string;
    url: string;
    created_at: number;
}


const Events  = () => {
    const [events, setEvents] = useState(['']);
    const url = ("https://api.github.com/orgs/BoomTownROI/events")
    

   useEffect(() => {
    axios.get(url)
    .then(response => {
        setEvents(response.data)
        console.log(response.data)
    })
   }, [url])


   return (
       <div>
        <div>
           <h1 className="id">{events.map(id => id)}</h1>
         </div>
         <div className="type">{events.map(type => type)}
           </div>
           <div>
             <h1>{events.map(name=> name)}</h1>
           </div>
           <div>
              <h1>{events.map(url => url)}</h1>
            </div>
           <div>
              <h1>{events.map(created_at => created_at)}</h1>
            </div>
       </div>    
   )
   
}
export default Events;