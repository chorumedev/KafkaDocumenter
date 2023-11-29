import { ClassAttributes, HTMLAttributes, useEffect, useState } from "react";
import { ExtraProps } from "react-markdown";

function shouldShowCode() {
    if (window.innerWidth < 1200) {
        return false;
    }
    return true;
}

export default function PreAdapter({ element }: {
    element: ClassAttributes<HTMLPreElement> & HTMLAttributes<HTMLElement> & ExtraProps
}) {
    const [showCode, setShowCode] = useState(true);

    useEffect(() => {
        const handler = (ev: UIEvent) => {
            setShowCode(shouldShowCode());
            return null;
        };
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    return showCode ? <pre className="bg-[#0A0A0A] p-4 block text-white rounded font-mono whitespace-pre-wrap" {...element}></pre> : null;
}