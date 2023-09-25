
const SingleDonars = ({ donar }) => {

  const {
    id,
    image,
    title,
    donate,
    description,
    category,
    color_for_category_bg,
    color_for_card_bg,
    Color_for_text_and_button_background,
  } = donar || {};


  return (
    <div>
     
     <div className="card card-side bg-base-100 shadow-xl" style={{background: color_for_card_bg}}>
        <figure>
          <img className="h-full" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className=" items-center"> 
          <button
              className="btn"
              style={{
                backgroundColor: Color_for_text_and_button_background,
                color: color_for_category_bg,
              }}
            >
              {category}
            </button>
            <h2 className="card-title">{title}</h2>
          </div>
          <p>{donate}</p>
          <button className="btn" style={{ backgroundColor: Color_for_text_and_button_background}}>View Details</button>
        </div>
      </div>
      </div>
   
  );
};

export default SingleDonars;
