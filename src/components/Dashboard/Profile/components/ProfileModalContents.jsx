import React from 'react'
import { AiOutlineLink, AiOutlineMail } from 'react-icons/ai'
import { BiHeart, BiMessageAltDetail } from 'react-icons/bi'
import { BsBag, BsBriefcase, BsCardImage } from 'react-icons/bs'
import { ImInfo } from 'react-icons/im'
import { IoIosMusicalNotes } from 'react-icons/io'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { RiText, RiTwitterLine, RiVideoLine } from 'react-icons/ri'
// import { v4 as uuidv4 } from 'uuid'

const ProfileModalContens = ({ handleClick, setShowModal,uuidv4 }) => {
    const contents = [
        {
            name: 'Basic Blocks',
            items: [

                {
                    id: uuidv4().toString(),
                    hasImage: false,
                    name:"About",
                    image: '',
                    title: '',
                    titleAlign: 'left',
                    sectionTitle: '',
                    subTitle: 'Tell your audience more about yourself',
                    body: '',
                    descAlign: 'left',
                    type: 'about',
                    imageLink: '',
                    imageFile: null,
                    isHidden: false,
                    icon: <ImInfo />,
                },
                {
                    id: uuidv4().toString(),
                    name: 'Text',
                    desc: 'Add text block',
                    icon: <RiText />,
                    title: '',
                    sectionTitle: '',
                    subTitle: 'Add text block',
                    titleAlign: 'center',
                    body: ``,
                    type: 'text',
                    isHidden: false,
                    show: false,
                },
                {
                    name: 'Links',
                    subTitle: 'Add links to your relevant resources',
                    icon: <AiOutlineLink />,
                    type: 'links',
                },
            ],
        },
        {
            name: 'Media Blocks',
            items: [
                {
                    name: 'Images',
                    desc: 'Add image gallery',
                    icon: <BsCardImage />,
                    type: 'images',
                },
                {
                    name: 'videos',
                    desc: 'Import videos from YouTube',
                    icon: <RiVideoLine />,
                    type: 'videos',
                },
                {
                    name: 'projects',
                    desc: 'Add notable projects to your profile',
                    icon: <BsBriefcase />,
                    type: 'projects',
                },
                {
                    name: 'tweet embed',
                    desc: 'Embed a tweet on your profile',
                    icon: <RiTwitterLine />,
                    type: 'tweet',
                },
                {
                    name: 'music links',
                    desc: 'Embed Spotify, YouTube Music, Apple Music or SoundCloud',
                    icon: <IoIosMusicalNotes />,
                    type: 'music',
                },
            ],
        },
        {
            name: 'Growth Blocks',
            items: [
                {
                    name: 'mailing list',
                    desc: 'Collect emails and build a mailing list',
                    icon: <AiOutlineMail />,
                    type: 'mailList',
                },
                {
                    name: 'contact form',
                    desc: 'Receive messages from your visitors',
                    icon: <BiMessageAltDetail />,
                    type: 'contact',
                },
            ],
        },
        {
            name: 'Monetization Blocks',
            items: [
                {
                    name: 'tipping',
                    desc: 'Let your audience support your work',
                    icon: <BiHeart />,
                    type: 'tipping',
                },
                {
                    name: 'digital products',
                    desc: 'Showcase your digital products to boost sales',
                    icon: <BsBag />,
                    type: 'digitalProducts',
                },
            ],
        },
    ]
    return (
        <div>
            {contents.map((content, index) => (
                <div>
                    <div className="uppercase text-gray-500 font-semibold py-2">
                        {content.name}
                    </div>
                    {content.items.map((item) => (
                        <div
                            onClick={() => {
                                handleClick(item)
                                setShowModal(false)
                            }}
                            className="flex gap-4 cursor-pointer items-center bg-white hover:bg-gray-50 p-2 border-b rounded mb-2"
                        >
                            <div className="bg-gray-200 text-gray-600 p-2 flex items-center justify-center rounded-[50%]">
                                {item.icon}
                            </div>
                            <div className="flex-grow">
                                <div className="my-1 text-lg capitalize">
                                    {item.name}
                                </div>
                                <div className="text-gray-500 text-sm">
                                    {item.subTitle}
                                </div>
                            </div>
                            <div className="text-gray-500">
                                <button className="mx-2">
                                    <MdOutlineKeyboardArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ProfileModalContens
