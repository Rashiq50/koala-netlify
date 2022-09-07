import React from "react";
import { useState, useContext } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GlobalContext } from "../../../Context/GlobalContext";
import ShareAbles from "../../Misc/shareables";
import AvatarPlaceHolder from "../../Common/AvataPlaceHolder";
import BioSection from "./BioSection";
// const types = [
//     textType:{
//         title:"",
//         body:"",
//     },
//     aboutType:{
//         title:"",
//         body:"",
//         image:"",
//         descAlign:"left",
//     }
// ]

export default function ProfileIndex(){
    const [showBioSection, setShowBioSection] = useState(false);
    const [showMain, setShowMain] = useState(true);
    const [state, setState] = useContext(GlobalContext);
    const [profile, setProfile] = useState({
        bioSection:{
            index:0,
            name:state.user.name,
            username:state.user.username,
            bio:"Morbi mattis libero a dolor egestas gravida. Maecenas",
            bioStyle:"center",
            socialLinks:[],
            showProfilePhoto:true,
        },
        sections:[
            {
                title:"",
                body:"",
                type:"text"
            },
            {
                hasImage:false,
                image:"",
                title:"",
                body:"",
                descAlign:"left",
                type:"about",
            }
        ],
    })
    return(
        <div className="container mx-auto py-10">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <h1 className='text-2xl font-semibold mb-2'>My Profile</h1>
                    <a href={`${window.location.origin}/${state.user?.username}`} target="_" className="text-blue-600" >
                        <HiOutlineExternalLink fontSize={"1.5rem"} />
                    </a>
                </div>
                <div>
                    <ShareAbles type="hr" itemType="profile" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                    {showMain &&
                        <div>
                            <div className="text-gray-400 my-4" >Add links and content to your profile</div>
                            <div className="bg-gray-50 p-10 rounded">
                                <div 
                                    onClick={()=>{setShowMain(()=>false); setShowBioSection(true)}} 
                                    className="flex gap-4 cursor-pointer items-center bg-white p-4 rounded-lg">
                                    <AvatarPlaceHolder user={state.user} w="w-20" />
                                    <div>
                                        <div className="my-1 text-xl capitalize">
                                            {profile.bioSection.name}
                                        </div>
                                        <div className="text-gray-500">
                                            Update bio, name, social & photo
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {showBioSection &&
                        <BioSection bio={profile.bioSection} closeBio={()=>{
                            setShowMain(()=>true); setShowBioSection(false)
                        }} />
                    }
                </div>

                <div className="col-span-1 p-10">
                    <div className="rounded-3xl shadow-2xl p-8 h-[60vh] overflow-y-auto">
                        <div className={`flex flex-col ${profile.bioSection.bioStyle === 'center' ? "items-center text-center" :"items-start text-left" }`} >
                            <AvatarPlaceHolder user={state.user} w="w-20" />
                            <div className="my-4 text-2xl capitalize">
                                {profile.bioSection.name}
                            </div>
                            <div className="text-gray-500">
                                {profile.bioSection.bio}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}