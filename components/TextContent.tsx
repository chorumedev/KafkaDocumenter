import { ReactNode } from "react";

export default function TextContent({children}: {children: ReactNode}) {
    return(
        <section className="text-white max-w-[1200px] m-auto p-5 text-justify">
            {children}
        </section>
    );
}