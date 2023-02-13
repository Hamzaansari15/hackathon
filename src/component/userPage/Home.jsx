import React from "react";
import logoname from "../image/saylaniname.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import HomebannerLogo from '../image/Grocery.jpeg'
import Rectangle from '../image/Rectangle.jpeg'
import Rectangle3 from '../image/Rectangle2.jpeg'
import Rectangle4 from '../image/Rectangle4.jpeg'
import Meet from '../image/meet2.jpeg'
import FooterTap from "./FooterTap";
const Home = () => {
    return (
        <div className="main-container-home">
            <div className="header-home">
                <div>
                    <img src={logoname} />
                    <h3>Discount Store</h3>
                </div>
                <AiOutlineShoppingCart className="cart-icon" />
            </div>
            <div className="homebanner-logo">
                <img src={HomebannerLogo} />
            </div>
            <div className="bottom-product">
                <div className="bottom-product-container">
                    <div className="home-searchBar">
                        <input placeholder="Search by product name" />
                        <div className="shop-cate">
                            <h3>Shop by Category</h3>
                        </div>
                        <div className="products">
                            <div > <img src={Rectangle3} /> </div>
                            <div > <img src={Rectangle4} /> </div>
                            <div > <img src={Rectangle} /> </div>
                        </div>
                        <div className="product-list-details"> <img src={Meet} />
                            <div className="product-list">
                                <div className="meetAnd-price"><h3>Meet</h3> <h3>Rs.800-per Kg</h3></div>
                                <div className="description-div"><h3>This is product description This is product</h3>
                                    <button className="plus-button">+</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <FooterTap />
        </div>
    )
}
export default Home;