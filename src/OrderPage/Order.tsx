import OrderAddress from "./Address/OrderAddress";
import OrderSummary from "./OrderSummary/OrderSummary";
import "./order.css"

function Order(){
    return (
        <div className={"order_grid"}>
            <div className={"order_address"}>
                <OrderAddress/>
            </div>
            <div className={"order_summary"}>
                <OrderSummary showGiftCards={true} text={"Proceed to Pay"} link={"/pay"}/>
            </div>
        </div>
    )
}

export default Order