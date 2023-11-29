import { appContext } from "@/context/AppContext";
import { useContext, useState } from "react";

export default function Loading() {
    const {loading} = useContext(appContext);
    return loading ? (
        <section className="absolute z-50 w-full h-full bg-black flex justify-center items-center bg-opacity-90">
            <svg width="167" height="146" viewBox="0 0 167 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_7_2)">
                    <path d="M9.45483 134.25L83.5 6L157.545 134.25H9.45483Z" stroke="white" className="loadingIcon" strokeWidth="6" shapeRendering="crispEdges" />
                </g>
                <defs>
                    <filter id="filter0_d_7_2" x="0.258675" y="0" width="166.483" height="145.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_2" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_2" result="shape" />
                    </filter>
                </defs>
            </svg>
        </section>
    ): '';
}