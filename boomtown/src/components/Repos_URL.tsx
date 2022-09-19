import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Repos  = () => {
    const [repo, setRepo] = useState(['']);
    const url = "https://api.github.com/orgs/BoomTownROI/repos";

   useEffect(() => {
    axios.get(url)
    .then(response => {
        setRepo(response.data)
        console.log(response.data)
    })
   }, [url])

   return (
       <div>
        <div>
       <h1 className="id">{this.state.repo.id}</h1>
       </div>
       <div className="name">{repo.name}
           </div>
           <div>
       <h1>{repo.html_url}</h1>
       <h1>{repo.description}</h1>
       <h1>{repo.language}</h1>
       <h1>{repo.created_at}</h1>
       <h1>{repo.updated_at}</h1>
       <h1>{repo.pushed_at}</h1>
       </div> 
       </div>
       
   )
   
}
export default Repos;