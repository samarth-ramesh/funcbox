import react, {useState} from "react"
import "./p2.css"

function Item(props: {
    colorClassName: string, title: string, children: react.ReactElement,
    buttonColorClassName: string, translateOpenClassName: string,
    translateCloseClassName: string
}) {

    const [open, setOpen] = useState(false)
    const ocf = () => {
        setOpen(!open)
    } // toggling open

    return <div className={"p2_plans_all_item_holder"} onClick={ocf}>
        <div className={props.colorClassName + " p2_plans_all_items"}>
            <div className={"p2_plans_item_title"}>{props.title}</div>
            <div className={"p2_plans_item_text"}>
                {props.children}
            </div>
        </div>
        <ul className={"p2_plans_all_pricing p2_plans_all_transition " + (open ? props.translateOpenClassName : props.translateCloseClassName)}>
            <li>Monthly a/month</li>
            <li>Quarterly a/month</li>
            <li>Half-yearly a/month</li>
            <li>Yearly a/month</li>
            <button className={props.buttonColorClassName + " p2_plans_all_button"}>Add to cart</button>
        </ul>
    </div>
}

function P2() {
    return <>
        <div className={"p2_title_text"}>Plans</div>
        <div className={"p2_plans_holder"}>
            <Item colorClassName={"p2_plans_basic_color"} title={"Basic"} buttonColorClassName={"p2_plans_basic_button"}
                  translateCloseClassName={"p2_plans_basic_closed"} translateOpenClassName={"p2_plans_basic_open"}>
                <ul>
                    <li>FuncBox Binder</li>
                    <li>3 mathematical apps</li>
                    <li>3 scientific apps</li>
                    <li>3 game apps</li>
                    <li>Stickers</li>
                    <li>Kickstart guide</li>
                    <li>Interactive website</li>
                </ul>
            </Item>
            <Item colorClassName={"p2_plans_standard_color"} title={"Standard"}
                  buttonColorClassName={"p2_plans_standard_button"} translateOpenClassName={"p2_plans_standard_open"}
                  translateCloseClassName={"p2_plans_standard_closed"}>
                <ul>
                    <li>FuncBox Binder</li>
                    <li>5 mathematical apps</li>
                    <li>5 scientific apps</li>
                    <li>5 game apps</li>
                    <li>Stickers</li>
                    <li>Mini fun deck</li>
                    <li>Kickstart guide</li>
                    <li>Interactive website</li>
                </ul>
            </Item>
            <Item colorClassName={"p2_plans_premium_color"} title={"Premium"}
                  buttonColorClassName={"p2_plans_premium_button"} translateOpenClassName={"p2_plans_premium_open"}
                  translateCloseClassName={"p2_plans_premium_closed"}>
                <ul>
                    <li>FuncBox Binder</li>
                    <li>8 mathematical apps</li>
                    <li>8 scientific apps</li>
                    <li>8 game apps</li>
                    <li>2 Surprise goodies</li>
                    <li>Mystery toy</li>
                    <li>Stickers</li>
                    <li>Mini fun deck</li>
                    <li>Kickstart guide</li>
                    <li>Interactive website</li>
                </ul>
            </Item>
        </div>
        <div className={"p2_footer"}>
            <img src={"/images/box.png"} alt={"Gift Box"}/>
            <div className={"p2_footer_text_holder"}>
                <div className={"p2_footer_text"}> Searching for a one-time gift or corporate? <div className={"p2_footer_text_link"}>You're in luck»</div></div>
            </div>

        </div>

    </>
}

export default P2