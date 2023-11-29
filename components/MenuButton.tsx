import React, { useContext } from "react";
import { appContext } from "@/context/AppContext";
import HamburguerIcon from "./HamburguerIcon";

export default function MenuButton() {
    const { openSideMenu, toggleSideMenu } = useContext(appContext);
    const baseClass = 'fixed z-50 cursor-pointer w-8 h-8 text-white mt-4 ml-2';
    const buttonText = openSideMenu ? 'X' : <HamburguerIcon/>;

    const handleMenuToggle = () => {
        toggleSideMenu();
    };

    return (
        <div onClick={handleMenuToggle} className={`${baseClass}`}>
            {buttonText}
        </div>
    );
}
