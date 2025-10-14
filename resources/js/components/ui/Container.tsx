import React from "react";

type ContainerProps = {
    children: React.ReactNode;
}

export function Container({children}: ContainerProps){
    return(
        <div className='w-110 bg-gray-900/50 mt-24 border border-gray-500/80 rounded-xl p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-gray-300/80 hover:shadow-gray-500/20 m-auto py-10 '>{
            children}
        </div>
    )
}

