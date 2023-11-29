import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function StrongAdapter({element}: {
    element: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps
}) {
   return <strong className="text-indigo-400" {...element}></strong>
}