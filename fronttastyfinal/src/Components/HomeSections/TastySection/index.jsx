import React from 'react'
import './style.scss'
const TastySection = () => {
  return (
    <section className='tasty'>
        <div className='tasty__container'>
            <div className='tasty__container__img'>
                <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" alt="" />
            </div>
            <div className='tasty__container__content'>
                <div className='tasty__container__content__subTitle'>
                ABOUT TASTY
                </div>
                <div className='tasty__container__content__title'>
                Our chef cooks the most delicious food for you
                </div>
                <div className='tasty__container__content__text'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </div >
                <div className='tasty__container__content__text'>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </div>

            </div>
        </div>
    </section>
  )
}

export default TastySection