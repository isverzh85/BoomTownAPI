import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Events  = () => {
    const [events, setEvents] = useState(['']);
    const url = "https://api.github.com/orgs/BoomTownROI/events";

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
       <h1 className="id">{this.state.events.id}</h1>
       </div>
       <div className="name">{events.type}
           </div>
           <div>
       <h1>{events.repo.name}</h1>
       <h1>{events.repo.url}</h1>
       <h1>{events.created_at}</h1>
       </div> 
       </div>
       
   )
   
}
export default Events;