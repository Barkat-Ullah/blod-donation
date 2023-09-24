import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "../DonateCard/DonateCard";


const SingleDonates = () => {
    const [donates, setDonates] = useState();
    const {id} = useParams();
    const idInt = parseInt(id) 
    const donateAll = useLoaderData();
    useEffect( () => {
        const findDonate = donateAll?.find((all) => all.id === idInt)
            
            setDonates(findDonate)
        
    },[id, donateAll]);
   
    return (
        <div>
           <DonateCard donates ={donates}></DonateCard>
        </div>
    );
};

export default SingleDonates;