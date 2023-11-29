import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function SubtitleAdapter({element}: {
    element: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps
}) {
    return (
        <h2 className="text-xl font-bold border-t-[1px] border-solid border-zinc-800 pt-8" {...element}></h2>
    );
}