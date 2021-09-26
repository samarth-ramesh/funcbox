import "./Header.css"
import {useState} from "react";
// @ts-ignore
import CheeseburgerMenu from 'cheeseburger-menu'

function Logo() {
    return (
        <div className={"header_logo_holder"}>
            <img src={"/images/logo.png"} alt={"Logo"}/>
            <div className={"header_logo_text"}>FuncBox</div>
        </div>
    )
}

function GenericTopItem(props: { imgPath: string, text: string }) {
    return (
        <div className={"header_generic_nav_item_holder"}>
            <img src={props.imgPath} alt={props.text} width={45}/>
            <span className={"header_generic_nav_item_text"}>{props.text}</span>
        </div>
    )
}

function Cart() {

    return (
        <div className={"header_cart_holder header_nav_holder"}>
            <img src={"/images/cart.png"} alt={"Cart"}/>
            <div className={"header_cart_text"}>Go To Cart</div>
        </div>
    )
}

function CartItems() {
    return (
        <div className={"header_cart_items_holder"}>
            <div className={"header_cart_items_heading"}>Cart</div>
            <div>
                <div className={"header_cart_items_item"}>
                    <div className={"header_cart_items_item_basic"}>Basic</div>
                    <div className={"header_cart_items_button_grp"}>
                        <img src={"/images/bin.png"} alt={"remove"}/>
                        1
                        <img className={"header_cart_items_add"} src={"/images/plus.png"} alt={"add"}/>
                    </div>
                </div>
            </div>
            <button className={"header_cart_pay_button"}>Proceed to pay</button>
        </div>
    )
}

function Header() {
    const [cartOpen, setCartOpen] = useState(false)
    const closeCart = () => {
        setCartOpen(false)
    }
    const openCart = () => {
        setCartOpen(true)
    }

    return (
        <>
            <div className={"header_nav_holder"}>
                <div className={"header_lgroup"}>
                    <Logo/>
                </div>
                <div className={"header_rgroup"}>
                    <GenericTopItem imgPath={"/images/login.png"} text={"Login/Signup"}/>
                    <GenericTopItem imgPath={"/images/store.png"} text={"Store"}/>
                    <GenericTopItem imgPath={"/images/about.png"} text={"About"}/>
                    <GenericTopItem imgPath={"/images/house.png"} text={"Home"}/>
                </div>
                <div className={"header_cart_holder_holder"} onClick={openCart}>
                    <Cart/>
                </div>
            </div>
            <CheeseburgerMenu isOpen={cartOpen} closeCallback={closeCart} right={true}>
                <CartItems/>
            </CheeseburgerMenu>
        </>
    )
}

export default Header