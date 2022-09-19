import React, {useEffect, useState} from 'react';

export const Organization = () => {
   const [info, setInfo] = useState('');

   useEffect(() => {
       const url = "https://api.github.com/orgs/boomtownroi";
       const response = fetch(url);

       
        
   })




    return(
        <div>

        </div>
    )
        
        
}

