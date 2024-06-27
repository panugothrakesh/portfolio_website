import Paragraph from "./paragraph"
import Balancer from "react-wrap-balancer"

export default function Para({para}){
    return(
        <>
            <Balancer>
                <Paragraph value={para}/>
            </Balancer>
        </>
    )
}