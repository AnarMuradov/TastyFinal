import React, { useContext } from 'react'
import { WishListContext } from '../../Context/WishListContext'
import './style.scss'
import { Helmet } from 'react-helmet-async'
const WishList = () => {
    const {wishList,handleWishList} = useContext(WishListContext)
  return (
    <>
    <Helmet>
      <title>
        WishList
      </title>
    </Helmet>
    <section className='wishList'>
        <div className='wishList__container'>
        <div className="wishList__container__table">
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>description</th>
                <th>price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishList.map(x=>{
                return(
                  <tr key={x._id}>
                    <td>{x.name}</td>
                    <td>{x.description}</td>
                    <td>{x.price}</td>
                    <td><button onClick={()=>handleWishList(x)}>Remove</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        </div>
    </section>
    </>

  )
}

export default WishList