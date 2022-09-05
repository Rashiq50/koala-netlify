import React from "react";

export default function PrimaryButtonOutline({ text = "Button", onCLickFunction, htmlFor }) {
    return (
        <label onClick={onCLickFunction} htmlFor={htmlFor} className='btn btn-primary btn-outline text-white w-full'>
            {text}
        </label>
    )
}