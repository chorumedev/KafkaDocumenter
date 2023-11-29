import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";
import ExclamationIcon from "../ExclamationIcon";

export default function BlockquoteAdapter({ element }: {
    element: ClassAttributes<HTMLQuoteElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    const { children, ...rest } = element;

    return (
        <blockquote className="bg-[#0A0A0A] p-4 align-middle rounded-lg mb-8" {...rest}>
            <div>
                <ExclamationIcon></ExclamationIcon>
            </div>
            <div className="flex align-middle justify-center">
                {children}
            </div>
        </blockquote>
    );
}