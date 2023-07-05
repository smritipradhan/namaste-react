import { useEffect, useState } from "react";
import { Shimmer } from "react-shimmer";
import { RestraurentCard } from "../RestraurentCard/RestraurentCard";
import Search from "../Search/Search";
import "./Body.css";
import { Image, Breathing } from "react-shimmer";
export const Body = () => {
  const [searchInput, setSeachInput] = useState("");
  const [restraurentCardData, setRestraurentCardData] = useState([]);
  const [searchedCardData, setSearchedCardData] = useState([]);
  const handleChange = (e) => {
    setSeachInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput || searchInput === "") {
      setSearchedCardData(
        restraurentCardData.filter((element) => {
          return element?.data?.name
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        })
      );
    }
  }, [searchInput]);

  const handleTopRatedRestraurentData = () => {
    setSearchedCardData(
      restraurentCardData.filter((data) => {
        return data.data.avgRating > 4;
      })
    );
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&sortBy=DELIVERY_TIME&page_type=DESKTOP_WEB_LISTING"
    );
    const restrauData = await data.json();
    setRestraurentCardData(restrauData?.data?.cards[0]?.data?.data?.cards);
    setSearchedCardData(restrauData?.data?.cards[0]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search">
        <Search handleChange={handleChange} value={searchInput} />
      </div>
      <button className="filter-btn" onClick={handleTopRatedRestraurentData}>
        Top Rated Restraurent
      </button>
      <div className="res-container">
        {searchedCardData.length !== 0 ? (
          searchedCardData &&
          Array.isArray(searchedCardData) &&
          searchedCardData.map((restraurent) => {
            return (
              <RestraurentCard
                restraurent={restraurent?.data}
                key={restraurent?.data?.id}
              />
            );
          })
        ) : (
          <>
            {Array(20)
              .fill(undefined)
              .map(() => {
                return <Breathing width={200} height={300} />;
              })}
          </>
        )}
      </div>
    </div>
  );
};
