/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonate } from "../js/localStorage";
import SingleDonars from "../Donars/SingleDonars";

/* eslint-disable react/prop-types */
const DonateCard = () => {
    
    const donated = useLoaderData()
    const [donars, setDonars] = useState([])
    const [showAll, setShowAll] = useState(4)

  
    useEffect(()=>{
        const storedDonated = getStoredDonate()
        if(donated.length > 0){
            const cardDonate = donated.filter(donar => storedDonated.includes( donar.id) )
            setDonars(cardDonate)
            
        }
        
    },[donated])
    
  return (
   <div>
     <div  className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
      
      {donars.slice(0, showAll).map((donar) => (
        <SingleDonars key={donar.id} donar={donar} />
      ))}

    </div>
    <div className = {showAll === donars.length ? 'hidden' : ''}>
       <div className="text-center my-4">
       <button onClick={() => setShowAll(donars.length)} className="btn my-4 bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% text-yellow-50">See All</button>
       </div>
        </div>
   </div>
    
  );
};

export default DonateCard;
