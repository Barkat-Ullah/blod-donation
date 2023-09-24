const DonateCard = ({ donates }) => {
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
  } = donates;

  return (
    <div>
      <div className="card bg-base-200 shadow-xl">
        <figure>
          <img className="w-full h-[700px] rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions ">
            <button className="btn btn-primary">{donate}</button>
          </div>
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
