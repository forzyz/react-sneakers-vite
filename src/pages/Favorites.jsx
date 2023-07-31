import React from "react";
import AppContext from "../context";
import Card from "../components/Card";
import Info from "../components/Info";
import { Loader } from "../components/Loader";

function Favorites() {
  const { favorites, onAddToFavorite, onAddToCart, isLoading } =
    React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>My favorites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {isLoading ? (
          [...Array(12)].map((_, index) => <Loader key={index} />)
        ) : favorites.length > 0 ? (
          favorites.map((item, index) => (
            <Card
              key={item.id}
              onClickFavorite={(obj) => onAddToFavorite(obj)}
              onClickPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))
        ) : (
          <Info
            title="You don't have favorites :("
            description="Like something from the main menu."
            image="img/crying-smile.svg"
          />
        )}
      </div>
    </div>
  );
}

export default Favorites;
