import { Link } from "react-router-dom"
import "./orderSummary.css"

function OrderSummary(props: {showGiftCards: boolean}){
    return (
        <div>
            <div className={"orderSummary_title"}>Order Summary</div>
            <div className={"orderSummary_item"}>
                <div>Item 1:</div>
                <div>₹420.00</div>
            </div>
            <div className={"orderSummary_item"}>
                <div>Item 2:</div>
                <div>₹420.00</div>
            </div>
            <hr/>
            <div className={"orderSummary_total orderSummary_item"}>
                <div>Total:</div>
                <div>₹840.00</div>
            </div>
            <Link to={"/pay"} className={"order_Summary_link"}>Proceed to pay</Link>
            {
                props.showGiftCards ? <div>
                    <div className={"orderSummary_promo_text"}>
                        Enter Gift cards, Voucher & Promotional codes
                    </div>
                    <input className={"orderSummary_promo"}/>
                </div> : null
            }
        </div>
    )
}

export default OrderSummary