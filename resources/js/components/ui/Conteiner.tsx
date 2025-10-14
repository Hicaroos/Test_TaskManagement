import React from "react";

type ContainerProps = {
    children: React.ReactNode;
}

export function Container({children}: ContainerProps){
    return(
        <div className='w-110 mt-24 border-2 border-gray-200 m-auto rounded-lg py-10 bg-black/60'>{children}</div>
    )
}