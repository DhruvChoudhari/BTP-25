import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import { removeFromWishlist } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";
import { backend_url } from "../../server";
// import { addTocart, removeFromCart } from "../../redux/actions/cart";

const Wishlist = ({setOpenWishlist}) => {
    // const { cart } = useSelector((state) => state.cart);
    const cartData = [
        {
            name: "Iphone 14 pro max 256 gb ssd and 8gb ram silver colour",
            description: "test",
            price: 999,
        },
        {
            name: "Iphone 14 pro max 256 gb ssd and 8gb ram silver colour",
            description: "test",
            price: 245,
        },
        {
            name: "Iphone 14 pro max 256 gb ssd and 8gb ram silver colour",
            description: "test",
            price: 645,
        },
    ]

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {/* {cart && cart.length == 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Cart items is empty!</h5>
          </div>
        ) : (
          <> */}
            <div>
              <div className="flex w-full justify-end pt-5 pr-5 ">
                <RxCross1
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setOpenWishlist(false)}
                />
              </div>
              {/* item length */}
              <div className={`${styles.noramlFlex} p-4`}>
                <AiOutlineHeart size={25} />
                <h5 className="pl-2 text-[20px] font-[500]">
                  3 items
                </h5>
              </div>

              {/* Cart Single item */}
              <br />
              <div className="w-full border-t">
                {cartData &&
                  cartData.map((i, index) => {
                    return (
                      <CartSingle
                        data={i}
                        key={index}
                        // quantityChangeHandler={quantityChangeHandler}
                        // removeFromCartHandler={removeFromCartHandler}
                      />
                    );
                  })}
              </div>
            </div>

          {/* </> */}
        {/* )} */}
      </div>
    </div>
  )
}

// const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
const CartSingle = ({ data}) => {
    const [value, setValue] = useState(1);
    const totalPrice = data.price * value;
  
    return (
      <>
        <div className="border-b p-4">
          <div className="w-full flex items-center">
            <RxCross1
                className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2 ml-2"
                // onClick={() => removeFromWishlistHandler(data)}
            />
            <img
              src="https://ih1.redbubble.net/image.2572472228.6606/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg"
              className="w-[130px] h-min ml-2 mr-2 rounded-[5px]"
              alt=""
            />
  
            <div className="pl-[15px]">
              <h1>{data.name}</h1>
              <h4 className="font-[400] text-[17px] pt-[3px]  text-[#d02222] font-Roboto ">
                US${totalPrice}
              </h4>
            </div>

            <div>
                <BsCartPlus
                size={20}
                className="cursor-pointer"
                title="Add to cart"
                // onClick={() => addToCartHandler(data)}
                />
            </div>

          </div>
        </div>
      </>
    );
  };


export default Wishlist