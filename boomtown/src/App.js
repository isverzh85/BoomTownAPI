import React, {useEffect, useState} from 'react';
import Events_URL from './components/Events_URL.tsx';
import Repos_URL from './components/Repos_URL.tsx';

const App = () => {
   const [person, setPerson] = useState([]);

  useEffect(() => {
   const url = "https://api.github.com/orgs/boomtownroi"
   const fetchData = async () =>{
     try{
       const response = await fetch(url);
       const json = await response.json();
       console.log(json);
     }catch(error){
       console.log("error", error)
     }
   };  
  })


return (
     <div className="App">
       <div className="content">
      
       </div>
       <div className="information">
         <ul className="info">
           <li className="id">{person.id}</li>
           <li clasName="name">{person.name}</li>
           <li className="html">{person.html_url}</li>
           <li className="verified">{person.is_verified}</li>
           <li className="created">{person.created_at}</li>
         </ul>
         </div>    
       </div>
)}
export default App;