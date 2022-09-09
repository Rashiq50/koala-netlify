import React from 'react'
import { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import TextInput from '../../../../Common/TextInput'
import ReactQuill from 'react-quill'
import PrimaryButton from '../../../../Common/PrimaryButton'

const EditTextSection = ({
    profile,
    setProfile,
    closeSection,
    data,
    saveData,
}) => {
    const [sectionData, setSectionData] = useState(data)

    return (
        <div className="mt-8">
            <button
                className="flex text-2xl items-center font-semibold gap-3"
                onClick={() => closeSection()}
            >
                <BsArrowLeft />
                Text Section
            </button>
            <div className="my-2 text-gray-500">Add a text block</div>

            <div className="mb-3 mt-8">
                <div className="my-2">Section Title</div>
                <TextInput
                    fullWidth={true}
                    placeholder="Enter the section title"
                    value={sectionData.title}
                    onValueChange={(e) => {
                        setSectionData({
                            ...sectionData,
                            title: e.target.value,
                        })
                        setProfile({
                            ...profile,
                            sections: [
                                ...profile.sections.map((item) => {
                                    if (item.id === sectionData.id) {
                                        return {
                                            ...item,
                                            title: e.target.value,
                                        }
                                    }
                                    return item
                                }),
                            ],
                        })
                    }}
                />
            </div>

            <div className="mt-8 mb-4 uppercase text-semibold text-xl">
                CONTENT AREA
            </div>
            <div className="my-2 text-gray-500">
                General text block to write anything you want in bold, italic,
                lists, emojis or code format.
            </div>
            <div className="my-2 text-gray-500">Text</div>
            <div className='mb-10'>
                <ReactQuill
                    theme="snow"
                    value={sectionData.body}
                    onChange={(e) => {
                        setSectionData({
                            ...sectionData,
                            body: e,
                        })
                        setProfile({
                            ...profile,
                            sections: [
                                ...profile.sections.map((item) => {
                                    if (item.id === sectionData.id) {
                                        return {
                                            ...item,
                                            body: e,
                                        }
                                    }
                                    return item
                                }),
                            ],
                        })
                    }}
                    placeholder="Start typing here..."
                />
            </div>

            <PrimaryButton
                text="Save"
                w="full"
                onCLickFunction={() => {
                    setProfile({
                        ...profile,
                        sections: [
                            ...profile.sections.map((item) => {
                                if (item.id === sectionData.id) {
                                    return {
                                        ...sectionData
                                    }
                                }
                                return item
                            }),
                        ],
                    });
                    saveData();
                }}
            />
        </div>
    )
}

export default EditTextSection
