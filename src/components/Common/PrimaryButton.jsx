import React from "react";

export default function PrimaryButton({ text = "Button", onCLickFunction, htmlFor }) {
    return (
        <label onClick={onCLickFunction} htmlFor={htmlFor} className='btn btn-primary px-10 font-bold rounded text-white text-lg w-full'>
            {text}
        </label>
    )
}