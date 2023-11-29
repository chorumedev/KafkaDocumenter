import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function CodeAdapter({element}: {
    element: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    return <code className="bg-[#0A0A0A] px-1 inline text-center text-yellow-300 font-mono rounded" {...element}></code>
}