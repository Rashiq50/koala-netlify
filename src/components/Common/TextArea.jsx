import React from 'react'

export default function TextArea({
    placeholder,
    rows,
    cols,
    value,
    onValueChange,
    fullWidth = false,
}) {
    return (
        <textarea
            value={value}
            onChange={onValueChange}
            className={` ${
                fullWidth && 'w-full'
            } textarea text-xl textarea-bordered pb-7`}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
        ></textarea>
    )
}
