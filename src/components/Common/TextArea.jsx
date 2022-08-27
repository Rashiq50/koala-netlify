import React from "react";

export default function TextArea({ placeholder, rows, cols, }) {
    return (
        <textarea
            className="textarea text-xl textarea-bordered pb-7"
            placeholder={placeholder} rows={rows} cols={cols} >
        </textarea>
    )
}