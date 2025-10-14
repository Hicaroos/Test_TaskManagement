import React from 'react';

type textareaProps = {
    name: string;
    placeholder: string;
} & React.ComponentProps<'textarea'>;

export function Textarea({ name, placeholder, ...props}: textareaProps) {
    return (
        <>
            <textarea name={name} placeholder={placeholder} {...props}
            className="w-80 h-20 text-center text-sm  text-gray-200 outline-none border-[0.15rem] border border-gray-200 rounded-md placeholder:text-gray-500 placeholder:italic"/>
        </>
    );
}
