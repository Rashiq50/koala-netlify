import React from 'react'
import { BiPieChart } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'

export default function MovableProfileParts({ title, subTitle, icon }) {
    return (
        <div className="flex gap-4 cursor-pointer items-center bg-white p-4 rounded mb-4">
            <div className="bg-gray-200 text-gray-600 p-2 flex items-center justify-center rounded-[50%]">
                {icon}
            </div>
            <div className="flex-grow">
                <div className="my-1 text-lg capitalize">{title}</div>
                <div className="text-gray-500 text-sm">{subTitle}</div>
            </div>
            <div className="text-gray-500">
                <button className="mx-2">
                    <MdDeleteOutline />
                </button>
                <button>
                    <TbGridDots />
                </button>
            </div>
        </div>
    )
}
