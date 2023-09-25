import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonates } from '../js/localStorage';



const SingleDonates = () => {
const donateAll = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id) 

    const findDonate = donateAll?.find((data) => data.id === idInt)
    
    const {
        // id,
        image,
        title,
        donate,
        description,
        category,
        color_for_category_bg,
        color_for_card_bg,
        Color_for_text_and_button_background,
      } = findDonate;

      const handleToast = () => {
        saveDonates(idInt)
        
        toast("Successfully Donated")
      };


    return (
        
        <div>
           <div className="card bg-base-200 shadow-xl">
        <figure>
          <img className="w-full h-[550px] rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions ">
            <button onClick={ handleToast } className="btn text-blue-950" style={{backgroundColor:Color_for_text_and_button_background}}>{donate}</button>
          </div>
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
        </div>
       
      </div>
      <ToastContainer />
    </div>
   
    );
};

export default SingleDonates;