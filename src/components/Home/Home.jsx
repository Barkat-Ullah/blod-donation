import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";



const Home = () => {

    const donates = useLoaderData();
    
    return (
        <div>
            <Banner donates={donates}></Banner>
           
        </div>
    );
};

export default Home;