import Paragraph from "./paragraph"
import Balancer from "react-wrap-balancer"
import { IconCloudDemo } from "../Icon_cloud/iconDemoCloud"

export default function Para({para}){
    return(
        <>
            <div className="flex lg:flex-row flex-col-reverse justify-center items-center w-screen">
                <Paragraph value={para}/>
                <IconCloudDemo />
            </div>
        </>
    )
}