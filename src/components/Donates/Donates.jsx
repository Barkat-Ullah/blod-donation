import Donate from "../Donate/Donate";


const Donates = ({donates}) => {

    console.log(donates);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {
                donates?.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
            }
        </div>
    );
};

export default Donates;