import "./p1.css"

function FooterItem(props: {text: string, alt: string, path: string}){
    return <div className={"p1_footer_item_holder"}>
        <img src={props.path} alt={props.alt} className={"p1_footer_item_img"}/>
        <div className={"p1_footer_item_text"}>
            {props.text}
        </div>
    </div>
}

function Footer(){
    return <div className={"p1_footer_holder"}>
        <FooterItem text={"Free shipping"} alt={"shipping"} path={"/images/shipping.png"}/>
        <FooterItem text={"No experience necessary"} alt={"experience"} path={"/images/experience.png"}/>
        <FooterItem text={"Cancel Anytime"} alt={"cancel"} path={"/images/pause.png"}/>
    </div>
}

function P1(){
    return <>
        <div className={"p1_holder"}>
            <img src={"/images/filler-1.png"} alt={"Kids coding in front of a laptop"} className={"p1_image"}/>
            <div className={"p1_text"}>
                FuncBox is a box full of surprises which will teach you educational concepts and coding with a revolutionary twist.
                <ul className={"p1_list_holder"}>
                    <li>Perfect for age group 6-12 years.</li>
                    <li>Build your own fun games.</li>
                    <li>Learn to code and explore</li>
                    <li>Share your game with your friends</li>
                </ul>
            </div>
        </div>
        <Footer/>
    </>
}

export default P1