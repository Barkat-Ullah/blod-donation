/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";

// const Search = ({ donates }) => {

//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const filteredData = donates?.filter(
//       (result) => result.category === search
//     );
//     setResults(filteredData);
//   }, [donates, search]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setSearch(e.target.elements.name.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex">
//         <input className="text-black pl-2" type="text" name="name" id="" />
//         <input
//           className="text-xl p-2 rounded-[4px] bg-[#FF444A]"
//           type="submit"
//           value="Search"
//         />
//       </form>

//       <div>
//         {results.map((result, index) => (
//           <div key={index}>{result.category}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;

// import { useState } from "react";
// import SingleDonates from "../singleDonates/SingleDonates";
// import Donate from "../Donate/Donate";

// const Search = ({ donates }) => {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const inputValue = e.target.elements.name.value.trim();

//     const filteredData = donates.filter(
//       (result) =>
//         result.title.toLowerCase().includes(inputValue.toLowerCase()) ||
//         result.category.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setResults(filteredData);
//   };
//   console.log("Filtered Results:", results);
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex">
//         <input className="text-black pl-2" type="text" name="name" id="" />
//         <input
//           className="text-xl p-2 rounded-[4px] bg-[#FF444A]"
//           type="submit"
//           value="Search"
//         />
//       </form>

//       <div>

//   {results.length > 0 ? (
//     results.map((result, index) => (

//      <Donate key={index} donate={result}></Donate>

//     ))
//   ) : ''
//   }
// </div>

//     </div>
//   );
// };

// export default Search;

// Search.js
// import { useState } from "react";
// import Donate from "../Donate/Donate";

import { useEffect, useState } from "react";
import Donates from "../Donates/Donates";

const Search = ({ donates }) => {
  // const [search, setSearch] = useState(donates);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(donates);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.name.value;
    const filteredData = donates.filter((result) =>
      result.category.toLowerCase().includes(inputValue.toLowerCase())
    );
    setResults(filteredData);
    console.log(filteredData);
  };

  return (
    <div>
      <div
        className="hero h-[85vh] rounded-lg mt-5 "
        style={{ background: "url(https://i.ibb.co/YQ2rhfZ/Clothing.png)", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
      >
        <div className="h-full w-full flex justify-center items-center bg-[#c7c2c275]">
     
          <form onSubmit={handleSubmit} className="flex">
            <input className="text-black pl-2" type="text" name="name" id="" />
            <input
              className="text-xl p-2 rounded-[4px] bg-[#FF444A]"
              type="submit"
              value="Search"
            />
          </form>
      
        </div>
      </div>

      <Donates donates={results}></Donates>
    </div>
  );
};

export default Search;
