import React from "react";
import Link from "next/link";

interface Textprops {
  url1 : string,
  url2 : string,
  url3 : string,
  url4 : string

}

const Sidebar: React.FC<Textprops> = ({url1, url2 , url3, url4} : Textprops) => {
  return (
    <div className="min-h-full w-[95px] bg-[#F1F1F4] text-white flex flex-col">
      <div className=" flex justify-center items-center p-4 text-center bg-[#5169F6] rounded-lg  h-12 w-[50px] ml-6 mt-6">
        <h2 className="text-2xl font-bold"><span>C</span>L</h2>
      </div>
      <ul className="flex-1 flex flex-col items-center justify-center">
        <Link href={url1} passHref>
          <li className="flex items-center p-4  hover:bg-[#E1E5FE] cursor-pointer rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home" width="28" height="35">
              <path fill="#5169F6" d="M6.64373233,18.7821107 L6.64373233,15.7152449 C6.64371685,14.9380902 7.27567036,14.3067075 8.05843544,14.3018198 L10.9326107,14.3018198 C11.7188748,14.3018198 12.3562677,14.9346318 12.3562677,15.7152449 L12.3562677,15.7152449 L12.3562677,18.7732212 C12.3562498,19.4472781 12.9040221,19.995083 13.5829406,20 L15.5438266,20 C16.4596364,20.0023291 17.3387522,19.6427941 17.9871692,19.0007051 C18.6355861,18.3586161 19,17.4867541 19,16.5775231 L19,7.86584638 C19,7.13138763 18.6720694,6.43471253 18.1046183,5.96350064 L11.4429783,0.674268354 C10.2785132,-0.250877524 8.61537279,-0.22099178 7.48539114,0.745384082 C7.48539114,0.745384082 0.967012253,5.96350064 0.967012253,5.96350064 C0.37274068,6.42082162 0.0175522924,7.11956262 0,7.86584638 L0,16.5686336 C0,18.463707 1.54738155,20 3.45617342,20 L5.37229029,20 C5.69917279,20.0023364 6.01348703,19.8750734 6.24547302,19.6464237 C6.477459,19.417774 6.60792577,19.1066525 6.60791706,18.7821107 L6.64373233,18.7821107 Z" transform="translate(2.5 2)"></path>
            </svg>

          </li>
        </Link>
        <Link href={url2} passHref>
          <li className="p-4  hover:bg-[#E1E5FE]  cursor-pointer flex items-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="35" viewBox="0 0 24 24" id="work">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path fill="#5169F6" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
            </svg>

          </li>
        </Link>

        <Link href={url3}>
          <li className="p-4   hover:bg-[#E1E5FE] cursor-pointer flex items-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="35" fill="#5169F6" className="bi bi-file-earmark-ppt-fill" viewBox="0 0 16 16">
              <path d="M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5" />
              <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5z" />
            </svg>



          </li>
        </Link>
        <Link href={url4} passHref>
          <li className="p-4  hover:bg-[#E1E5FE]  cursor-pointer flex items-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="35" fill="#5169F6" className="bi bi-clipboard-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2" />
            </svg>

          </li>
        </Link>
        <Link href={"/form"}>
        <li className="p-4  hover:bg-[#E1E5FE]  cursor-pointer flex items-center rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="35" fill="#5169F6" className="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </li></Link>
      </ul>
    </div>
  );
};

export default Sidebar;
