import React from 'react'
import { useState } from 'react'
import { BsArrowLeft, BsEye, BsEyeSlash } from 'react-icons/bs'
import TextInput from '../../../../Common/TextInput'
import ReactQuill from 'react-quill'
import PrimaryButton from '../../../../Common/PrimaryButton'
import { BiTrash } from 'react-icons/bi'
import { ImImage } from 'react-icons/im'
import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

const EditAboutSection = ({
    profile,
    setProfile,
    closeSection,
    data,
    saveData,
    handleDelete,
}) => {
    const [sectionData, setSectionData] = useState(data)
    const [file, setFile] = useState(sectionData.imageFile)

    const ReadFileAsDataUrl = (file, section) => {
        const reader = new FileReader()
        reader.onload = function (e) {
            setSectionData({
                ...sectionData,
                imageLink: e.target.result,
                imageFile: file,
            })
            setProfile({
                ...profile,
                sections: [
                    ...profile.sections.map((item) => {
                        if (item.id === section.id) {
                            return {
                                ...item,
                                imageLink: e.target.result,
                                imageFile: file,
                            }
                        }
                        return item
                    }),
                ],
            })
        }
        reader.readAsDataURL(file)
    }

    useEffect(() => {
        if (file) {
            ReadFileAsDataUrl(file, sectionData)
        } else {
            document.getElementById("fileUpload").value = "";
            setSectionData({
                ...sectionData,
                imageLink: '',
                imageFile: null,
            })
            setProfile({
                ...profile,
                sections: [
                    ...profile.sections.map((item) => {
                        if (item.id === sectionData.id) {
                            return {
                                ...item,
                                imageLink: '',
                                imageFile: null,
                            }
                        }
                        return item
                    }),
                ],
            })
        }
    }, [file])

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center">
                <button
                    className="flex text-2xl items-center font-semibold gap-3"
                    onClick={() => closeSection()}
                >
                    <BsArrowLeft />
                    About Section
                </button>
                <div className="flex items-center gap-x-3">
                    {sectionData.isHidden && (
                        <button
                            className="flex items-center gap-1"
                            onClick={() => {
                                setSectionData({
                                    ...sectionData,
                                    isHidden: false,
                                })
                                setProfile({
                                    ...profile,
                                    sections: [
                                        ...profile.sections.map((item) => {
                                            if (item.id === sectionData.id) {
                                                return {
                                                    ...item,
                                                    isHidden: false,
                                                }
                                            }
                                            return item
                                        }),
                                    ],
                                })
                            }}
                        >
                            <BsEye />
                            Show
                        </button>
                    )}
                    {!sectionData.isHidden && (
                        <button
                            className="flex items-center gap-1"
                            onClick={() => {
                                setSectionData({
                                    ...sectionData,
                                    isHidden: true,
                                })
                                setProfile({
                                    ...profile,
                                    sections: [
                                        ...profile.sections.map((item) => {
                                            if (item.id === sectionData.id) {
                                                return {
                                                    ...item,
                                                    isHidden: true,
                                                }
                                            }
                                            return item
                                        }),
                                    ],
                                })
                            }}
                        >
                            <BsEyeSlash />
                            Hide
                        </button>
                    )}
                    <button
                        onClick={() => {
                            handleDelete(sectionData)
                        }}
                        className="flex items-center gap-1"
                    >
                        <BiTrash /> Delete
                    </button>
                </div>
            </div>
            <div className="my-2 text-gray-500">{sectionData.subTitle}</div>

            <div className="mb-3 mt-8">
                <div className="flex justify-between items-center my-2">
                    <div className="my-2">Section Title</div>
                    <div className="flex shadow-lg items-center">
                        <button
                            onClick={() => {
                                setSectionData({
                                    ...sectionData,
                                    titleAlign: 'left',
                                })
                                setProfile({
                                    ...profile,
                                    sections: [
                                        ...profile.sections.map((item) => {
                                            if (item.id === sectionData.id) {
                                                return {
                                                    ...item,
                                                    titleAlign: 'left',
                                                }
                                            }
                                            return item
                                        }),
                                    ],
                                })
                            }}
                            className={`p-2 hover:bg-gray-100 ${
                                sectionData.titleAlign === 'left' &&
                                'text-blue-500'
                            }`}
                        >
                            <svg
                                data-v-5c18231e=""
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 0.5H15.8824V2.26471H0V0.5ZM0 13.7353H12.3529V15.5H0V13.7353ZM0 9.32353H15.8824V11.0882H0V9.32353ZM0 4.91176H12.3529V6.67647H0V4.91176Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                setSectionData({
                                    ...sectionData,
                                    titleAlign: 'center',
                                })
                                setProfile({
                                    ...profile,
                                    sections: [
                                        ...profile.sections.map((item) => {
                                            if (item.id === sectionData.id) {
                                                return {
                                                    ...item,
                                                    titleAlign: 'center',
                                                }
                                            }
                                            return item
                                        }),
                                    ],
                                })
                            }}
                            className={`p-2 hover:bg-gray-100 ${
                                sectionData.titleAlign === 'center' &&
                                'text-blue-500'
                            }`}
                        >
                            <svg
                                data-v-5c18231e=""
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.882324 0.5H16.7647V2.26471H0.882324V0.5ZM2.64703 13.7353H15V15.5H2.64703V13.7353ZM0.882324 9.32353H16.7647V11.0882H0.882324V9.32353ZM2.64703 4.91176H15V6.67647H2.64703V4.91176Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                setSectionData({
                                    ...sectionData,
                                    titleAlign: 'right',
                                })
                                setProfile({
                                    ...profile,
                                    sections: [
                                        ...profile.sections.map((item) => {
                                            if (item.id === sectionData.id) {
                                                return {
                                                    ...item,
                                                    titleAlign: 'right',
                                                }
                                            }
                                            return item
                                        }),
                                    ],
                                })
                            }}
                            className={`p-2 hover:bg-gray-100 ${
                                sectionData.titleAlign === 'right' &&
                                'text-blue-500'
                            }`}
                        >
                            <svg
                                data-v-5c18231e=""
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.764648 0.5H16.647V2.26471H0.764648V0.5ZM4.29406 13.7353H16.647V15.5H4.29406V13.7353ZM0.764648 9.32353H16.647V11.0882H0.764648V9.32353ZM4.29406 4.91176H16.647V6.67647H4.29406V4.91176Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

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

            <div className="my-3">
                <div className="my-2">Add Photo</div>
                <button
                    onClick={() => {
                        document.getElementById('fileUpload').click()
                    }}
                    disabled={sectionData.imageFile}
                    className="border rounded gap-2 justify-start flex items-center bg-gray-100 hover:bg-gray-200 py-4 w-full px-4"
                >
                    {!sectionData.imageFile && (
                        <React.Fragment>
                            <ImImage /> Upload
                        </React.Fragment>
                    )}
                    {sectionData.imageFile && (
                        <React.Fragment>
                            <div className="flex-grow text-left">
                                {sectionData.imageFile.name}
                            </div>
                            <div
                                className='cursor-pointer'
                                onClick={() => {
                                    setFile(null)
                                }}
                            >
                                <IoClose />{' '}
                            </div>
                        </React.Fragment>
                    )}
                </button>
                <input
                    onChange={(e) => setFile(e.target.files[0])}
                    id="fileUpload"
                    type={'file'}
                    className="hidden"
                />
            </div>

            <div className="mt-8 mb-2 text-semibold text-lg">
                Description
            </div>

            <div className="mb-10">
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
                    saveData()
                }}
            />
        </div>
    )
}

export default EditAboutSection
