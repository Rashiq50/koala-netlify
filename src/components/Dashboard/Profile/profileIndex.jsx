import React from 'react'
import { useState, useContext } from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { GlobalContext } from '../../../Context/GlobalContext'
import ShareAbles from '../../Misc/shareables'
import AvatarPlaceHolder from '../../Common/AvataPlaceHolder'
import BioSection from './BioSection'
import { BiPieChart } from 'react-icons/bi'
import Modal from 'react-modal'
import MovableProfileParts from './components/MovableProfileParts'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
import PrimaryButton from '../../Common/PrimaryButton'
import { customStyles } from '../../../utils/customModalStyle'
import { IoMdClose } from 'react-icons/io'
import ProfileModalContens from './components/ProfileModalContents'
import EditTextSection from './components/TextSection/EditTextSection'
import EditAboutSection from './components/AboutSection/EditAboutSection'

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

export default function ProfileIndex() {
    const [showBioSection, setShowBioSection] = useState(false)
    const [showTextEditSection, setShowTextEditSection] = useState(false)
    const [showAboutSection, setShowAboutSection] = useState(false)
    const [currentSection, setCurrentSection] = useState(null)
    const [rollBackState, setRollBackState] = useState(null)
    const [showMain, setShowMain] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [state, setState] = useContext(GlobalContext)

    const [profile, setProfile] = useState({
        bioSection: {
            index: 0,
            name: state.user.name,
            username: state.user.username,
            bio: 'Morbi mattis libero a dolor egestas gravida. Maecenas',
            bioStyle: 'center',
            socialLinks: [],
            showProfilePhoto: true,
        },
        sections: [
            {
                id: uuidv4().toString(),
                title: 'Text Section',
                sectionTitle: '',
                subTitle: 'Add text block',
                titleAlign: 'center',
                body: `<p>
                Morbi mattis libero a dolor egestas gravida. Maecenas euismod mauris id ante sodales eleifend. Nunc in felis id dui accumsan imperdiet. 
                </p>`,
                type: 'text',
                isHidden: true,
                show: false,
            },
            {
                id: uuidv4().toString(),
                hasImage: false,
                image: '',
                title: 'Images Section',
                titleAlign: 'left',
                sectionTitle: '',
                subTitle: 'Add image gallery',
                body: '',
                descAlign: 'left',
                type: 'image',
                isHidden: false,
                show: false,
            },
            {
                id: uuidv4().toString(),
                hasImage: false,
                image: '',
                title: 'About Section',
                titleAlign: 'left',
                sectionTitle: '',
                subTitle: 'Tell your audience more about yourself',
                body: '',
                descAlign: 'left',
                type: 'about',
                imageLink: '',
                imageFile: null,
                isHidden: false,
                show: false,
            },
        ],
    })
    const list = [1, 2, 3]

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return
        }
        const items = reorder(
            profile.sections,
            result.source.index,
            result.destination.index,
        )
        console.log(items)
        setProfile({ ...profile, sections: [...items] })
    }

    const handleClick = (section) => {
        let functionToReturn
        switch (section.type) {
            case 'text':
                functionToReturn = setShowTextEditSection
                break
            case 'about':
                functionToReturn = setShowAboutSection
                break

            default:
                break
        }
        setRollBackState((prev) => (prev = profile))
        setCurrentSection((prev) => (prev = section))
        setShowMain(false)
        functionToReturn(true)
    }

    const AddNewSection = (section) => {
        let functionToReturn
        switch (section.type) {
            case 'text':
                functionToReturn = setShowTextEditSection
                break
            case 'about':
                functionToReturn = setShowAboutSection
                break

            default:
                break
        }
        setRollBackState((prev) => (prev = profile))
        setCurrentSection((prev) => (prev = section))
        const tmp = profile.sections
        tmp.push(section)
        setProfile((prev) => (prev = { ...profile, sections: [...tmp] }))
        setShowMain(false)
        functionToReturn(true)
    }

    const handleDelete = (section) => {
        setProfile({
            ...profile,
            sections: profile.sections.filter((el) => el.id != section.id),
        })
        let functionToReturn
        switch (section.type) {
            case 'text':
                functionToReturn = setShowTextEditSection
                break

            default:
                break
        }
        functionToReturn(false)
        setShowMain(true)
    }

    const ReadFileAsDataUrl = (file, section) => {
        const reader = new FileReader()

        reader.onload = function (e) {
            console.log('DataURL:', e.target.result)
            setProfile({
                ...profile,
                sections: [
                    ...profile.sections.map((item) => {
                        if (item.id === section.id) {
                            return {
                                ...item,
                                imageLink: e.target.result,
                            }
                        }
                        return item
                    }),
                ],
            })
        }
        reader.readAsDataURL(file)
    }
    // console.log(returnClickFunction("text"))

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-semibold mb-2">My Profile</h1>
                    <a
                        href={`${window.location.origin}/${state.user?.username}`}
                        target="_"
                        className="text-blue-600"
                    >
                        <HiOutlineExternalLink fontSize={'1.5rem'} />
                    </a>
                </div>
                <div>
                    <ShareAbles type="hr" itemType="profile" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                    {showMain && (
                        <div>
                            <div className="text-gray-400 my-4">
                                Add links and content to your profile
                            </div>
                            <div className="bg-gray-50 p-10 rounded">
                                <div
                                    onClick={() => {
                                        setShowMain(() => false)
                                        setShowBioSection(true)
                                    }}
                                    className="flex gap-4 cursor-pointer items-center bg-white p-4 rounded mb-4"
                                >
                                    <AvatarPlaceHolder
                                        user={state.user}
                                        w="w-20"
                                    />
                                    <div>
                                        <div className="my-1 text-xl capitalize">
                                            {profile.bioSection.name}
                                        </div>
                                        <div className="text-gray-500">
                                            Update bio, name, social & photo
                                        </div>
                                    </div>
                                </div>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {profile.sections.map(
                                                    (section, index) => (
                                                        <Draggable
                                                            key={uuidv4().toString()}
                                                            index={index}
                                                            draggableId={uuidv4().toString()}
                                                        >
                                                            {(
                                                                provided,
                                                                snapshot,
                                                            ) => (
                                                                <div
                                                                    ref={
                                                                        provided.innerRef
                                                                    }
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                >
                                                                    <MovableProfileParts
                                                                        key={uuidv4().toString()}
                                                                        icon={
                                                                            <BiPieChart
                                                                                fontSize={
                                                                                    '28px'
                                                                                }
                                                                            />
                                                                        }
                                                                        handleClick={
                                                                            handleClick
                                                                        }
                                                                        setShowMain={
                                                                            setShowMain
                                                                        }
                                                                        section={
                                                                            section
                                                                        }
                                                                        setProfile={
                                                                            setProfile
                                                                        }
                                                                        handleDelete={
                                                                            handleDelete
                                                                        }
                                                                    />
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ),
                                                )}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                                <PrimaryButton
                                    text="Add new section"
                                    w="full"
                                    onCLickFunction={() => setShowModal(true)}
                                />
                            </div>
                        </div>
                    )}
                    {showBioSection && (
                        <BioSection
                            profile={profile}
                            setProfile={setProfile}
                            closeBio={() => {
                                // setProfile((prev) => (prev = rollBackState))
                                setShowMain(() => true)
                                setShowBioSection(false)
                            }}
                        />
                    )}
                    {showTextEditSection && currentSection && (
                        <EditTextSection
                            profile={profile}
                            setProfile={setProfile}
                            data={currentSection}
                            closeSection={() => {
                                setProfile((prev) => (prev = rollBackState))
                                setShowMain(() => true)
                                setShowTextEditSection(false)
                            }}
                            saveData={() => {
                                setShowMain(() => true)
                                setShowTextEditSection(false)
                            }}
                            handleDelete={handleDelete}
                        />
                    )}
                    {showAboutSection && currentSection && (
                        <EditAboutSection
                            profile={profile}
                            setProfile={setProfile}
                            data={currentSection}
                            closeSection={() => {
                                setProfile((prev) => (prev = rollBackState))
                                setShowMain(() => true)
                                setShowAboutSection(false)
                            }}
                            saveData={() => {
                                setShowMain(() => true)
                                setShowAboutSection(false)
                            }}
                            handleDelete={handleDelete}
                            handleUpload={ReadFileAsDataUrl}
                        />
                    )}
                </div>

                <div className="col-span-1 p-10">
                    <div className="rounded-3xl shadow-2xl p-8 h-[60vh] overflow-y-auto">
                        <div
                            className={`flex flex-col ${
                                profile.bioSection.bioStyle === 'center'
                                    ? 'items-center text-center'
                                    : 'items-start text-left'
                            }`}
                        >
                            {profile.bioSection.showProfilePhoto && (
                                <AvatarPlaceHolder user={state.user} w="w-20" />
                            )}
                            <div className="my-4 text-2xl capitalize">
                                {profile.bioSection.name}
                            </div>
                            <div className="text-gray-500">
                                {profile.bioSection.bio}
                            </div>
                        </div>

                        {profile.sections.map((section, index) => (
                            <React.Fragment key={section.id}>
                                {
                                    <div className="my-10">
                                        <div
                                            className={` ${
                                                section.isHidden &&
                                                'text-gray-300 '
                                            } text-lg my-2 ${
                                                section.titleAlign ===
                                                    'center' && 'text-center'
                                            } ${
                                                section.titleAlign === 'left' &&
                                                'text-left'
                                            } ${
                                                section.titleAlign ===
                                                    'right' && 'text-right'
                                            }`}
                                        >
                                            {section.title}
                                        </div>
                                        {section.imageFile && (
                                            <img
                                                src={section.imageLink}
                                                className={`w-full object-cover my-2`}
                                            />
                                        )}
                                        <div
                                            className={`${
                                                section.isHidden &&
                                                'text-gray-300 '
                                            }`}
                                            dangerouslySetInnerHTML={{
                                                __html: section?.body,
                                            }}
                                        ></div>
                                    </div>
                                }
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={showModal}
                style={customStyles}
                onRequestClose={() => setShowModal(false)}
            >
                <div className="p-6 w-[600px]">
                    <div className="flex justify-between items-center w-full mb-2">
                        <div className="text-3xl font-semibold">
                            Add New Section
                        </div>
                        <button
                            onClick={() => {
                                setShowModal(false)
                            }}
                        >
                            <IoMdClose fontSize={'32px'} />
                        </button>
                    </div>

                    <ProfileModalContens
                        setShowModal={setShowModal}
                        handleClick={AddNewSection}
                        uuidv4={uuidv4}
                    />
                </div>
            </Modal>
        </div>
    )
}
