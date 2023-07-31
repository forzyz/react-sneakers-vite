import React from "react";
import Card from "../components/Card";
import { Loader } from "../components/Loader";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return isLoading
      ? [...Array(12)].map((_, index) => <Loader key={index} />)
      : filteredItems.map((item) => (
          <Card
            key={item.id}
            onClickFavorite={(obj) => onAddToFavorite(obj)}
            onClickPlus={(obj) => onAddToCart(obj)}
            {...item}
          />
        ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>{searchValue ? `Search by: "${searchValue}"` : "All sneakers"}</h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
