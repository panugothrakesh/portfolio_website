import Button from "../button/page"

export default function Landing(){
    return(
        <>
        <div className="md:h-[90vh] h-[75vh] flex flex-col gap-4 bg-black text-white justify-center md:items-center md:px-24 px-8">
            <p className="text-sm text-bold font-gilSemiBold">Development & Design Portfolio</p>
            <h1 className="md:text-center md:text-4xl text-2xl font-gilBold leading-tight">
                - Hi! I&apos;m Rakesh P, a Software <br className="md:block hidden"/>
                Engineer and a Product Designer based <br className="md:block hidden"/>
                in Hyderabad, India.
            </h1>
            <Button value="CONNECT"/>
        </div>
        </>
    )
}