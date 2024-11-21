import Link from 'next/link';
import { sizes, variants } from "@/lib/variants";

export default function Button({ href, variant = 'default', size = 'base', className, children, ...rest }) {
    const baseVariant = variants[variant];
    const baseSize = sizes[size];

    return (
        <Link 
            href={href} 
            className={`
                ${baseVariant} 
                ${baseSize} 
                ${className || ''} 
                relative 
                overflow-hidden 
                group
            `}
            {...rest}
        >
            <span 
                className="absolute inset-y-0 left-0 w-0 bg-current opacity-20 
                           group-hover:w-full transition-all duration-300 ease-in-out 
                           z-0"
            ></span>
            <span className="relative z-10">{children}</span>
        </Link>
    );
}