import React from "react";

export default function TextInput({ placeholder, value, onValueChange, type = "text", variant = 1, fullWidth=false }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onValueChange}
            className={`${variant === 1 ? "input input-lg input-bordered" : "border-2 w-96 py-5 px-5 rounded-lg mt-2 mb-2"} ${fullWidth && "w-full"}`} />
    )
}