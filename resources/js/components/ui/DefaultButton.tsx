import React from "react";

type DefaultButtonProps = {
    children: React.ReactNode;
} & React.ComponentProps<'button'>

export function DefaultButton ({children, ...props} :DefaultButtonProps){
    return(
        <button className="bg-gray-200 text-slate-900 w-80 px-8 py-1 rounded-md hover:bg-gray-300 transition-all duration-150 ease-in-out cursor-pointer" {...props}>
            {children}
        </button>
    )
}