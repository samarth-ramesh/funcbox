import "./confirmation.css"

function Confirmation() {
    return <div className={"confirm_holder_holder"}>
        <div className={"confirm_holder"}>
            <div className={"confirm_fancy_font"}>
                <div className={"confirm_fancy_title"}>Congratulations</div>
                <div className={"confirm_fancy_confirm"}>Your order has been placed</div>
            </div>
            <img src={"/images/delivery.png"} alt={""}/>
        </div>
    </div>
}

export default Confirmation