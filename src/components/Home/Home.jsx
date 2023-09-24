import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Donates from "../Donates/Donates";


const Home = () => {

    const donates = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Donates donates ={donates}></Donates>
        </div>
    );
};

export default Home;