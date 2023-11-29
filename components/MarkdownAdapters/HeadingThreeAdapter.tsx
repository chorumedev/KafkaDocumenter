import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function HeadingThreeAdapter({ element }: {
    element: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement> & ExtraProps
}) {
    return (
        <h3 className="text-red-400" {...element}></h3>
    );
}