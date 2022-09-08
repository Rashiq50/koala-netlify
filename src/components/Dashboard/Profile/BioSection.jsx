import React from 'react'
import { BsArrowLeft, BsPlus } from 'react-icons/bs'
import PrimaryButton from '../../Common/PrimaryButton'
import TextArea from '../../Common/TextArea'
import TextInput from '../../Common/TextInput'

const BioSection = ({ closeBio, setProfile, profile }) => {
    return (
        <div className="mt-8">
            <button
                className="flex text-2xl items-center font-semibold gap-3"
                onClick={() => closeBio()}
            >
                <BsArrowLeft />
                Bio section
            </button>
            <div className="my-2 text-gray-500">
                Share a little bit about what you’re doing
            </div>

            <div>Profile Photo</div>

            <div className="my-3">
                <div className="my-2">Name</div>
                <TextInput
                    fullWidth={true}
                    placeholder="Enter your name"
                    value={profile.bioSection.name}
                    onValueChange={(e) => {
                        setProfile({
                            ...profile,
                            bioSection: {
                                ...profile.bioSection,
                                name: e.target.value,
                            },
                        })
                    }}
                />
            </div>
            <div className="my-3">
                <div className="my-2">Username</div>
                <TextInput
                    fullWidth={true}
                    placeholder="Enter user name"
                    value={profile.bioSection.username}
                    onValueChange={(e) => {
                        setProfile({
                            ...profile,
                            bioSection: {
                                ...profile.bioSection,
                                username: e.target.value,
                            },
                        })
                    }}
                />
            </div>

            <div className="my-3">
                <div className="my-2">Bio description</div>
                <TextArea
                    fullWidth={true}
                    placeholder="Bio description"
                    value={profile.bioSection.bio}
                    onValueChange={(e) => {
                        setProfile({
                            ...profile,
                            bioSection: {
                                ...profile.bioSection,
                                bio: e.target.value,
                            },
                        })
                    }}
                />
            </div>

            <div className="my-12">
                <div className="text-lg">Bio Style</div>
                <div className="flex items-center justify-between gap-x-10 mt-8">
                    <div
                        onClick={(e) => {
                            setProfile({
                                ...profile,
                                bioSection: {
                                    ...profile.bioSection,
                                    bioStyle: 'center',
                                },
                            })
                        }}
                        className="w-1/2"
                    >
                        <label className="text-xl font-semibold flex gap-2 cursor-pointer mb-3">
                            <input
                                type={'radio'}
                                checked={
                                    profile.bioSection.bioStyle === 'center'
                                }
                            />
                            Center
                        </label>
                        <div
                            className={`px-10 py-8 border-2 rounded-lg flex items-center justify-center cursor-pointer ${
                                profile.bioSection.bioStyle === 'center' &&
                                'border-[#3A9EFD]'
                            }`}
                        >
                            {profile.bioSection.bioStyle === 'center' ? (
                                <svg
                                    data-v-1e6fffbe=""
                                    data-v-d612edda=""
                                    width="140"
                                    height="50"
                                    viewBox="0 0 140 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="70.5"
                                        cy="7.5"
                                        r="7.5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="38"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="54"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="70"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="86"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="102"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <rect
                                        data-v-1e6fffbe=""
                                        x="11"
                                        y="20"
                                        width="119"
                                        height="5"
                                        rx="2.5"
                                        fill="#3A9EFD"
                                    ></rect>
                                    <rect
                                        data-v-1e6fffbe=""
                                        y="30"
                                        width="140"
                                        height="5"
                                        rx="2.5"
                                        fill="#3A9EFD"
                                    ></rect>
                                </svg>
                            ) : (
                                <svg
                                    data-v-1e6fffbe=""
                                    data-v-d612edda=""
                                    width="140"
                                    height="50"
                                    viewBox="0 0 140 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="70.5"
                                        cy="7.5"
                                        r="7.5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="38"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="54"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="70"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="86"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-1e6fffbe=""
                                        cx="102"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <rect
                                        data-v-1e6fffbe=""
                                        x="11"
                                        y="20"
                                        width="119"
                                        height="5"
                                        rx="2.5"
                                        fill="#E8E8E8"
                                    ></rect>
                                    <rect
                                        data-v-1e6fffbe=""
                                        y="30"
                                        width="140"
                                        height="5"
                                        rx="2.5"
                                        fill="#E8E8E8"
                                    ></rect>
                                </svg>
                            )}
                        </div>
                    </div>
                    <div
                        onClick={(e) => {
                            setProfile({
                                ...profile,
                                bioSection: {
                                    ...profile.bioSection,
                                    bioStyle: 'left',
                                },
                            })
                        }}
                        className="w-1/2"
                    >
                        <label className="text-xl font-semibold flex gap-2 cursor-pointer mb-3">
                            <input
                                type={'radio'}
                                checked={profile.bioSection.bioStyle === 'left'}
                            />
                            Left
                        </label>
                        <div
                            className={`px-10 py-8 border-2 rounded-lg flex items-center justify-center cursor-pointer ${
                                profile.bioSection.bioStyle === 'left' &&
                                'border-[#3A9EFD]'
                            }`}
                        >
                            {profile.bioSection.bioStyle === 'left' ? (
                                <svg
                                    data-v-73ff625f=""
                                    data-v-d612edda=""
                                    width="140"
                                    height="50"
                                    viewBox="0 0 140 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        data-v-73ff625f=""
                                        cx="7.5"
                                        cy="7.5"
                                        r="7.5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="5"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="21"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="37"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="53"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="69"
                                        cy="45"
                                        r="5"
                                        fill="#3A9EFD"
                                    ></circle>
                                    <rect
                                        data-v-73ff625f=""
                                        y="20"
                                        width="119"
                                        height="5"
                                        rx="2.5"
                                        fill="#3A9EFD"
                                    ></rect>
                                    <rect
                                        data-v-73ff625f=""
                                        y="30"
                                        width="140"
                                        height="5"
                                        rx="2.5"
                                        fill="#3A9EFD"
                                    ></rect>
                                </svg>
                            ) : (
                                <svg
                                    data-v-73ff625f=""
                                    data-v-d612edda=""
                                    width="140"
                                    height="50"
                                    viewBox="0 0 140 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        data-v-73ff625f=""
                                        cx="7.5"
                                        cy="7.5"
                                        r="7.5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="5"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="21"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="37"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="53"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <circle
                                        data-v-73ff625f=""
                                        cx="69"
                                        cy="45"
                                        r="5"
                                        fill="#E8E8E8"
                                    ></circle>
                                    <rect
                                        data-v-73ff625f=""
                                        y="20"
                                        width="119"
                                        height="5"
                                        rx="2.5"
                                        fill="#E8E8E8"
                                    ></rect>
                                    <rect
                                        data-v-73ff625f=""
                                        y="30"
                                        width="140"
                                        height="5"
                                        rx="2.5"
                                        fill="#E8E8E8"
                                    ></rect>
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <label className="text-lg font-semibold flex gap-2 cursor-pointer">
                <input
                    type={'checkbox'}
                    checked={profile.bioSection.showProfilePhoto}
                    onClick={(e) => {
                        setProfile({
                            ...profile,
                            bioSection: {
                                ...profile.bioSection,
                                showProfilePhoto:
                                    !profile.bioSection.showProfilePhoto,
                            },
                        })
                    }}
                />
                Show Profile Photo
            </label>

            <div className="mt-8 mb-4 uppercase text-semibold text-xl">
                Socials
            </div>
            <div className="my-2">
                <button className="text-xl capitalize text-slate-800 flex items-center gap-2">
                    <BsPlus />
                    Add new social link
                </button>
            </div>
            <PrimaryButton
                text="Save"
                w="full"
                onCLickFunction={() => closeBio()}
            />
        </div>
    )
}

export default BioSection
