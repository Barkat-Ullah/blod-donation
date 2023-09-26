import Donate from "../Donate/Donate";


const Donates = ({donates}) => {
    
    // console.log(donates);
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            {
                donates?.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
            }
        </div>
    );
};

export default Donates;
