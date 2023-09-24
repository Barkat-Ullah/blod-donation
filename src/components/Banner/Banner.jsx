import Search from "../Search/Search";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[85vh] rounded-lg mt-5"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/YQ2rhfZ/Clothing.png)",
        }}
      >
        <div className="hero-overlay backdrop-opacity-10 backdrop-invert bg-white/30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
               <Search></Search>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
