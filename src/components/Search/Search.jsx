const Search = () => {
  return (
    <div className="">
      <h2 className="text-center text-4xl font-bold text-yellow-500 mb-2">I Grow By Helping People In Need</h2>
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
