import React, { createContext } from 'react'
import useLocal from '../Hooks/useLocal'
export const WishListContext = createContext()
function WishListProvider({children}) {
const [wishList, setWishList] = useLocal('wishlist',[])
    function handleWishList(item){
        const elementindex = wishList.findIndex(x=>x._id === item._id)
        if(elementindex === -1){
            setWishList([...wishList,item])
        }
       else{
            setWishList(wishList.filter(x=>x._id !== item._id))
        }
    }
  return (
    <WishListContext.Provider value={{wishList,handleWishList}}>
        {children}
    </WishListContext.Provider>
  )
}

export default WishListProvider