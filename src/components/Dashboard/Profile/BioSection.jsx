import React from "react";
import { BsArrowLeft, BsPlus } from "react-icons/bs";
import PrimaryButton from "../../Common/PrimaryButton";
import TextArea from "../../Common/TextArea";
import TextInput from "../../Common/TextInput";


const BioSection = ({bio, closeBio})=>{
    return (
        <div className="mt-8">
            <button className="flex text-2xl items-center font-semibold gap-3" onClick={()=>closeBio()}>
                <BsArrowLeft/>
                Bio section
            </button>
            <div className="my-2 text-gray-500">Share a little bit about what you’re doing</div>

            <div>
                Profile Photo
            </div>

            <div className="my-3">
                <div className="my-2">Name</div>
                <TextInput fullWidth={true} placeholder="Enter your name" value={bio.name} />
            </div>
            <div className="my-3">
                <div className="my-2">Username</div>
                <TextInput fullWidth={true} placeholder="Enter user name" value={bio.username} />
            </div>

            <div className="my-3">
                <div className="my-2">Bio description</div>
                <TextArea fullWidth={true} placeholder="Bio description" value={bio.bio} />
            </div>

            <div className="flex items-center justify-between my-12">
                <label className="text-xl w-1/2 font-semibold flex gap-2 cursor-pointer" >
                    <input type={"radio"} checked={bio.bioStyle === 'center'} />
                    Center
                </label>
                <label className="text-xl w-1/2 font-semibold flex gap-2 cursor-pointer" >
                    <input type={"radio"} checked={bio.bioStyle === 'left'} />
                    Left
                </label>
            </div>

            <label className="text-lg font-semibold flex gap-2 cursor-pointer" >
                <input type={"checkbox"} checked={bio.showProfilePhoto} />
                Show Profile Photo
            </label>

            <div className="mt-8 mb-4 uppercase text-semibold text-xl">Socials</div>
            <div className="my-2">
                <button className="text-xl capitalize text-slate-800 flex items-center gap-2">
                    <BsPlus/>
                    Add new social link
                </button>
            </div>
            <PrimaryButton text="Save" w="full" />
        </div>
    )
}

export default BioSection;