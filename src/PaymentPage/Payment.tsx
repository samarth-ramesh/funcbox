import "./payment.css"
import CCInput from "./CCInput/CCInput";
import OrderSummary from "../OrderPage/OrderSummary/OrderSummary";

function Payment() {
    return <div className={"payment_holder"}>
        <div className={"payment_ccinput"}>
            <CCInput/>
        </div>
        <div className={"payment_order"}>
            <OrderSummary showGiftCards={false} text={"Place Order"} link={"/done"}/>
        </div>
    </div>
}

export default Payment