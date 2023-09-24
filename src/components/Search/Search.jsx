const Search = () => {
  return (
    <div className="">
      <div className="relative">
        <input
          type="text"
          placeholder="Search here...."
          className="input input-bordered w-[350px] lg:w-[448px] pr-18"
        />
        <button className="btn bg-[#FF444A] text-white absolute top-0 right-0 rounded-l-none">
              Search
        </button>
      </div>
    </div>
  );
};

export default Search;
