import "./footer.css"

export default function () {
    return <div className={"footer_holder"}>
        <div className={"footer_input_holder"}>
            <label htmlFor={"touch"} className={"footer_input_label"}>Get in Touch</label>
            <input id={"touch"} className={"footer_input"}/>
        </div>
        <div className={"footer_links"}>
            <div>
                <p>Join our Team</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        </div>
        <div className={"footer_made_with"}>
            Made with <img src={"/images/heart.png"} alt={"love"}/> by Team FuncBox
        </div>
        <div className={"footer_social"}>
            <img src={"/images/in-icon.png"} alt={"linkedin"}/>
            <img src={"/images/fb-icon.png"} alt={"facebook"}/>
            <img src={"/images/ig-icon.png"} alt={"instagram"}/>
        </div>
    </div>
}