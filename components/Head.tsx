"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"

interface Textprops {
    text : string
}


const Head: React.FC<Textprops> = ({text} : Textprops) => {

    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        signOut({
            callbackUrl : "/"
        })
        console.log("loggedOut")
    }

    return (
        <div className='flex items-center justify-between  w-full ml-10 '>
            <h1 className="text-3xl  font-medium" >{text}</h1>
            <button onClick={handleSubmit} className="text-white h-10 w-20 bg-[#5169F6] rounded-lg mr-5">Logout</button>
        </div>
    )
}


export default Head;