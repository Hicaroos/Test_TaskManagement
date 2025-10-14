import React from 'react';

type InputProps = {
    name: string;
    placeholder: string;
} & React.ComponentProps<'input'>;

export function Input({ name, placeholder, type, ...props }: InputProps) {
    return (
        <>
            <input name={name} type={type} placeholder={placeholder} {...props} 
            className="w-80 p-1  text-center text-sm  text-gray-200 outline-none border-[0.15rem] border-transparent border-b-gray-200 transition-all duration-150 ease-in-out focus:rounded-md focus:border-gray-200 placeholder:text-gray-500 placeholder:italic"/>
        </>
    );
}
