import "./Header.css"


function Logo() {
    return (
        <div className={"logoHolder"}>
            <img src={"/images/logo.png"} alt={"Logo"}/>
            <div className={"logoText"}>FuncBox</div>
        </div>
    )
}

function GenericTopItem(props: { imgPath: string, text: string }) {
    return (
        <div className={"genericNavItemHolder"}>
            <img src={props.imgPath} alt={props.text} width={45}/>
            <span className={"genericNavItemText"}>{props.text}</span>
        </div>
    )
}

function Header() {
    return (
        <div className={"navHolder"}>
            <div className={"lgroup"}>
                <Logo/>
            </div>
            <div className={"rgroup"}>
                <GenericTopItem imgPath={"/images/login.png"} text={"Login/Signup"}/>
                <GenericTopItem imgPath={"/images/store.png"} text={"Store"}/>
                <GenericTopItem imgPath={"/images/about.png"} text={"About"}/>
                <GenericTopItem imgPath={"/images/house.png"} text={"Home"}/>
            </div>
        </div>
    )
}


export default Header