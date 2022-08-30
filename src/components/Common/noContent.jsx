import React from "react";
import { TbClipboardText } from "react-icons/tb";


const NoContent = ({ topText, bottomText }) => {
    return (
        <div className="flex justify-center items-center pt-10">
            <div className="text-center w-1/3">
                <button className="">
                    <TbClipboardText fontSize={"5rem"} />
                </button>
                <div className="text-xl font-semibold mb-2">
                    {topText}
                </div>
                <div className="text-lg">
                    {bottomText}
                </div>
            </div>
        </div>
    )
}

export default NoContent