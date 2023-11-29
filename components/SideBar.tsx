'use client';
import { appContext } from "@/context/AppContext";
import { useContext } from "react";
import SideBarItem from "./SideBarItem";
import Link from "next/link";

export default function SideBar() {
    const {openSideMenu, documents} = useContext(appContext);
    const baseClasses = `h-screen p-2 min-w-[300px] bg-black border-r-[1px] border-solid border-zinc-800 fixed z-30 text-white overflow-y-auto transition-all`
    const showClasses = openSideMenu ? 'ml-0':`ml-[-300px]`;
    const docs = documents.docs;
    return(
      <div className={`${baseClasses} ${showClasses}`}>
        <div className="mt-2 font-semibold text-white text-xl flex justify-center items-center"><Link href={"/"}>Evento de Kafka</Link></div>
        <nav className='m-2'>
          <ul>
           {
             docs.map((doc, i) => <SideBarItem key={doc.token} token={doc.token} index={i}>{docs[i].title}</SideBarItem>)
           }        
          </ul>
        </nav>
      </div>
    );
}