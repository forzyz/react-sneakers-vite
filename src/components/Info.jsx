import React from "react";
import AppContext from "../context";
import { useNavigate  } from "react-router-dom";

const Info = ({ image, title, description }) => {
  const { cartOpened, setCartOpened } = React.useContext(AppContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex mt-40 mb-40">
      <img
        className="mb-20"
        width={
          image === "img/sad-smile.svg" || image === "img/crying-smile.svg"
            ? 70
            : 120
        }
        src={image}
        alt="Empty"
      />
      <h2 className="m-5">{title}</h2>
      <p className="opacity-6 m-5">{description}</p>
      <button className="greenButton" onClick={cartOpened ? () => setCartOpened(false) : handleButtonClick}>
        <img src="img/arrow.svg" alt="Arrow" />
        Come Back
      </button>
    </div>
  );
};

export default Info;
