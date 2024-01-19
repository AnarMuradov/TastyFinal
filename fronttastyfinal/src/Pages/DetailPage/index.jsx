import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './style.scss'
import { Helmet } from 'react-helmet-async';
const Detail = () => {
    const [api, setApi] = useState([]);
    const {id} =useParams()
  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, [id]);
  return (
    <>
    <Helmet>
      <title>
        Detail Page
      </title>
    </Helmet>
    <section className='detail'>
        <div className='detail__container'>
        <div
                className="detail__container__data"
              >
                <div className="detail__container__data__content">
                  <div className="detail__container__data__content__name">
                    {api.name}
                  </div>
                  <div className="detail__container__data__content__description">
                    {api.description}
                  </div>
                </div>
                <div className="detail__container__data__price">
                  ${api.price}
                </div>
              </div>
        </div>
    </section>
    </>

  )
}

export default Detail