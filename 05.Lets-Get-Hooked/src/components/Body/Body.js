import { RestraurentCard } from "../RestraurentCard/RestraurentCard";
import "./Body.css";
import { restraurentData } from "../../restraurentCard";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import { restraurentData } from "../../../../04.Talk-is-cheap-show-me-the-code/restraurentCard";

export const Body = () => {
  const [searchInput, setSeachInput] = useState();
  const [restraurentCardData, setRestraurentCardData] =
    useState(restraurentData);
  const [searchedCardData, setSearchedCardData] = useState(restraurentCardData);
  const handleChange = (e) => {
    setSeachInput(e.target.value);
  };

  // useEffect(() => {
  //   if (searchInput || searchInput === "") {
  //     setSearchedCardData(
  //       restraurentCardData.filter((element) => {
  //         return element?.data?.name
  //           .toLowerCase()
  //           .includes(searchInput.toLowerCase());
  //       })
  //     );
  //   }
  // }, [searchInput]);

  const handleTopRatedRestraurentData = () => {
    setSearchedCardData(
      restraurentCardData.filter((data) => {
        return data.data.avgRating > 4;
      })
    );
  };

  return (
    <div className="body">
      <div className="search">
        <Search handleChange={handleChange} />
      </div>
      <button className="filter-btn" onClick={handleTopRatedRestraurentData}>
        Top Rated Restraurent
      </button>
      <div className="res-container">
        {searchedCardData.map((restraurent) => {
          return (
            <RestraurentCard
              restraurent={restraurent.data}
              key={restraurent?.data?.id}
            />
          );
        })}
      </div>
    </div>
  );
};
