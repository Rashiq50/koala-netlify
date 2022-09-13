import React from 'react'
import { BiPieChart } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { TbGridDots } from 'react-icons/tb'

export default function MovableProfileParts({
    section,
    icon,
    handleClick,
    setProfile,
    handleDelete,
}) {
    return (
        <div className="flex gap-4 cursor-pointer items-center bg-white p-4 rounded mb-4">
            <div
                onClick={() => {
                    handleClick(section)
                }}
                className="bg-gray-200 text-gray-600 p-2 flex items-center justify-center rounded-[50%]"
            >
                {icon}
            </div>
            <div
                onClick={() => {
                    handleClick(section)
                }}
                className="flex-grow"
            >
                <div className="my-1 text-lg capitalize">{section.title}</div>
                <div className="text-gray-500 text-sm">{section.subTitle}</div>
            </div>
            <div className="text-gray-500">
                <button
                    onClick={() => {
                        handleDelete(section)
                    }}
                    className="mx-2"
                >
                    <MdDeleteOutline />
                </button>
                <button>
                    <TbGridDots />
                </button>
            </div>
        </div>
    )
}
