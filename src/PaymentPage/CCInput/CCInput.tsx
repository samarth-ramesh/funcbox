import "./ccInput.css"

function CCInput(){
    return (
        <div>
            <div className={"cc_saved_card_holder"}>
                <div className={"cc_title"}>Shipping Address</div>
                <div className={"cc_saved"}>Saved Cards</div>
                <div className={"cc_saved_card"}>
                    <p>Sherlock Holmes</p>
                    <p>xxxx xxxx xxxx 1234</p>
                    <p>Expiration Date: 12/23</p>
                    <p className={"cc_saved_csc_input"}>Enter CVV <input autoComplete={"cc-csc"} placeholder={"XXX"} size={2}/></p>
                </div>
            </div>
            <div>
                <div className={"cc_add_card_title"}>Add a new Card</div>
                <div className={"cc_form_item"}>
                    <label htmlFor={"cc-name"}>Name on card</label>
                    <input id={"cc-name"} autoComplete={"cc-name"}/>
                </div>
                <div className={"cc_form_item"}>
                    <label htmlFor={"cc-number"}>Card Number</label>
                    <input id={"cc-number"} autoComplete={"cc-number"}/>
                </div>
                <div className={"cc_form_item"}>
                    <label>Expiration Date</label>
                    <div>
                        <input autoComplete={"cc-exp-month"} placeholder={"MM"} size={2}/>
                        <input autoComplete={"cc-exp-year"} placeholder={"YY"} size={2}/>
                    </div>
                </div>
                <div className={"cc_form_item"}>
                    <label htmlFor={"cc-cvv"}>CVV</label>
                    <input id={"cc-cvv"} autoComplete={"cc-csc"} size={3} placeholder={"XXX"}/>
                    Note: cvv will not be saved
                </div>

            </div>
        </div>
    )
}

export default CCInput