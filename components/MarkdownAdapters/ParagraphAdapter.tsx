import { ClassAttributes, HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export default function ParagraphAdapter({element}: {
    element: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & ExtraProps
}) {
   return (
    <p className="font-medium pt-4 mb-8" {...element}></p>
   );
}