/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Donate = ({ donate}) => {
  const {
    id,
    image,
    title,
    category,
    color_for_category_bg,
    color_for_card_bg,
    Color_for_text_and_button_background,
  } = donate;

  const donateStyle = {
    backgroundColor : color_for_card_bg
  }

  return (
   <Link to={`/singleDonates/${id}`}>
         <div className="">
      <div className="my-5 rounded-lg w-[280px] h-[450px] "  style={donateStyle}>
        <figure>
          <img className="w-full h-[260px] rounded-lg"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start" style={{}}>
            <button className="btn" disabled style={{backgroundColor: Color_for_text_and_button_background, color: color_for_category_bg}}>{category}</button>
          </div>
          <h2 className="card-title" style={{ color: color_for_category_bg}}>{title}</h2>
          
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Donate;
