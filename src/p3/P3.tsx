import "./p3.css"

function FaqItem(){
    return (
        <div className={"p3_faq_item"}>
            <div className={"p3_faq_question"}>What age is Funcbox for?</div>
            <div className={"p3_faq_answer"}>Funcbox is designed for kids 6-12 years in age.</div>
        </div>
    )
}

export default function (){
    return <>
        <div className={"p3_title"}>Frequently Asked Question</div>
        <div className={"p3_faq_holder"}>
            {
                [1,2,3].map((i: number) => {return <FaqItem key={i}/>})
            }
        </div>
    </>
}