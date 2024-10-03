import Link from "next/link"
export default function Country(){

    return(
        <>
        <div className=" w-1/2 max-[600px]:w-full bg-black m-auto pb-8 mt-20 font-bold">
            <h1 className="text-4xl text-white text-center py-8">Countries</h1>
            <ul className=" list-none flex justify-center flex-col items-center gap-4 text-white text-center"> 
            
                <li className="text-lg py-2 hover:underline">
                  <Link href={"/country/pakistan"}> Pakistan </Link>
                </li>

                <li className="text-lg py-2 hover:underline">
                    <Link href={"/country/China"}>China</Link>
                </li>

                <li className="text-lg py-2 hover:underline">
                   <Link href={"/country/bangladesh"}>Bangladesh</Link>
                </li>

                <li className="text-lg py-2 hover:underline">
                   <Link  href={"/country/iran"}>Iran</Link>
                </li>
            </ul>
        </div>
        </>
    )
}