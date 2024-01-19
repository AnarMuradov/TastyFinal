import React, { useContext, useEffect, useState } from "react";
import './style.scss'
import { Link } from "react-router-dom";
import { WishListContext } from "../../../Context/WishListContext";
const FetchSection = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  const {handleWishList} = useContext(WishListContext)

  return (
    <section className="fetchSection">
      <div className="fetchSection__container">
        <div className="fetchSection__container__title">
          <span>OUR MENU</span>
          <p>Discover Our Exclusive Menu</p>
        </div>
        <div className="fetchSection__container__category">
          <ul className="fetchSection__container__category__list">
            <li><i className="fa-solid fa-drumstick-bite"></i> Main</li>
            <li><i className="fa-solid fa-utensils"></i> Deserts</li>
            <li><i className="fa-solid fa-champagne-glasses"></i> Drinks</li>
          </ul>
        </div>
        <div className="fetchSection__container__allData">
          {api.map((x) => {
            return (
              <div
                key={x._id}
                className="fetchSection__container__allData__data"
              >
                <div className="fetchSection__container__allData__data__content">
                  <div className="fetchSection__container__allData__data__content__name">
                    {x.name}
                  </div>
                  <div className="fetchSection__container__allData__data__content__description">
                    {x.description}
                  </div>
                </div>
               <Link to={`/DetailPage/${x._id}`}><button>Detail</button></Link>
               <button onClick={()=>handleWishList(x)}>Add To WishList</button>
                <div className="fetchSection__container__allData__data__price">
                  ${x.price}
                </div>
              </div>
            );
          })}
        </div>

        <div className="fetchSection__container__footer">
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost
          </p>
          <button>Make a Reservation</button>
        </div>
      </div>
    </section>
  );
};

export default FetchSection;
