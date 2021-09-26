import "./orderAddress.css"

function AddressDisplay() {
    return (
        <>
            <div className={"order_saved_address"}>Saved Address</div>
            <div className={"order_address_holder"}>
                <p>Sherlock Holmes</p>
                <p>211B,</p>
                <p>Baker Street, London,</p>
                <p>United Kingdom</p>
                <p>929290304</p>
            </div>
        </>
    )
}

function DetailsInput(){
    return (
        <div className={"order_input_holder"}>
            <div className={"order_input_item_holder"}>
                <div className={"order_input_item"}>
                    <label htmlFor={"first_name"}>First Name</label>
                    <input id={"first_name"} autoComplete={"given-name"}/>
                </div>
                <div className={"order_input_item"}>
                    <label htmlFor={"last_name"}>Last Name</label>
                    <input id={"last_name"} autoComplete={"family-name"}/>
                </div>
            </div>
            <div className={"order_input_item_holder"}>
                <div className={"order_input_item"}>
                    <label htmlFor={"hno"}>Apartment/House number</label>
                    <input id={"hno"} autoComplete={"address-line1"}/>
                </div>
                <div className={"order_input_item"}>
                    <label htmlFor={"phone"}>Phone Number</label>
                    <input id={"phone"} autoComplete={"tel"}/>
                </div>
            </div>
            <div>
                <div className={"order_input_item"}>
                    <label htmlFor={"strt"}>Street/Locality</label>
                    <input id={"strt"} autoComplete={"address-line2"}/>
                </div>
            </div>
            <div className={"order_input_item_holder"}>
                <div className={"order_input_item"}>
                    <label htmlFor={"city"}>City</label>
                    <input id={"city"}/>
                </div>
                <div className={"order_input_item"}>
                    <label htmlFor={"state"}>State</label>
                    <input id={"state"}/>
                </div>
                <div className={"order_input_item"}>
                    <label htmlFor={"zip"}>Pin Code</label>
                    <input id={"zip"}/>
                </div>
            </div>
            <div className={"order_input_item_holder"}>
                <div className={"order_input_item"}>
                    <label htmlFor={"phone"}>Phone Number</label>
                    <input id={"phone"} autoComplete={"tel"}/>
                </div>
            </div>
        </div>
    )
}

function Order(){
    return (
        <>
            <div className={"order_address_title"}>Shipping Address</div>
            <AddressDisplay/>
            <DetailsInput/>
            <div className={"order_address_title"}>Billing Address</div>
            <AddressDisplay/>
            <DetailsInput/>
        </>
    )
}

export default Order