import React from "react";

type HeadingProps = {
    children: React.ReactNode;
}

export function Heading({children}: HeadingProps){
    return(
        <h1 className='text-2xl font-bold text-gray-200'>{children}</h1>
    )
}