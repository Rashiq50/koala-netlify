import React, { useCallback, useContext, useRef, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import TextInput from "../../Common/TextInput";
import { useDropzone } from 'react-dropzone';
import { AiFillEye } from "react-icons/ai";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { IoMdClose, IoMdCloudUpload } from "react-icons/io";
import PrimaryButton from "../../Common/PrimaryButton";
import { GlobalContext } from "../../../Context/GlobalContext";
import Modal from 'react-modal';
import { customStyles } from "../../../utils/customModalStyle";
Modal.setAppElement('#root');

export default function ProductCreate() {

    const [globalState, setGlobalState] = useContext(GlobalContext);
    const initialProductState = {
        name: "",
        description: "",
        price: "",
        isFree: false,
        type: 'file',
        redirectUrl: "",
        files: [],
        coverImage: `https://picsum.photos/200/300?random=${globalState.products.length + 1}`,
        coverImageFile: null,
        slug: "",
    }

    const [product, setProduct] = useState(initialProductState);
    const [finishModalOpen, setFinishModal] = React.useState(false);

    const handleTypeChange = (typePass) => {
        setProduct({ ...product, type: typePass })
    }

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const getUserName = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        return user.username;
    }

    const addProduct = () => {
        setGlobalState({ ...globalState, "products": [...globalState.products, product] });
        setFinishModal(true);
        setProduct({ ...initialProductState });
    }

    return (
        <div className="container mx-auto py-10 px-12">
            <Link to="/product-pages" >
                <div className="flex gap-4 items-center">
                    <MdOutlineArrowBack />
                    <div className="text-xl font-semibold text-black">Add new product</div>
                </div>
            </Link>

            <div className="mt-10">
                <div className="mb-10">
                    <div className="mb-2">Name</div>
                    <TextInput placeholder={"Name of product"} fullWidth={true} value={product.name} onValueChange={e => { setProduct({ ...product, name: e.target.value }) }} />
                </div>

                <div className="mb-10">
                    <div className="mb-2">Description</div>
                    <ReactQuill
                        theme="snow"
                        value={product.description}
                        onChange={e => { setProduct({ ...product, description: e }) }}
                        placeholder="Describe your product here..."
                    />
                </div>

                <div className="mb-10">
                    <div className="mb-2">Product Image</div>
                    <div {...getRootProps()} className="border border-dashed text-center rounded-lg p-8 border-black">
                        <IoMdCloudUpload fontSize={48} className="mx-auto" />
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p className="text-lg">
                                    <button className="text-[#20215A] font-bold mr-1">
                                        Click to upload
                                    </button>
                                    or drag and drop your product image here <br />
                                    400x400px image recommended (.png or .jpg). (20MB maximum file size)
                                </p>
                        }
                    </div>
                </div>

                <div className="mb-10">
                    <div className="mb-2">Product Type</div>
                    <div className="flex gap-4">
                        <label className="text-lg cursor-pointer">
                            <input
                                type={"radio"}
                                checked={product.type === 'file'}
                                onChange={e => { setProduct({ ...product, type: 'file' }) }}
                            />
                            <span className="ml-1">
                                File
                            </span>
                        </label>
                        <label className="text-lg cursor-pointer">
                            <input
                                type={"radio"}
                                checked={product.type === 'url'}
                                onChange={e => { setProduct({ ...product, type: 'url' }) }}
                            />
                            <span className="ml-1">
                                Redirect URL
                            </span>
                        </label>
                    </div>

                    {product.type === 'url' &&
                        <div className="mb-10">
                            <div className="mb-2 mt-6">Redirect URL</div>
                            <TextInput placeholder={"https://   "} fullWidth={true} value={product.redirectUrl} onValueChange={e => { setProduct({ ...product, redirectUrl: e.target.value }) }} />
                        </div>
                    }

                    {product.type === 'file' &&
                        <div className="mb-10">
                            <div className="mb-2 mt-6">Files</div>
                            <div {...getRootProps()} className="border border-dashed text-center rounded-lg p-8 border-black">
                                <IoMdCloudUpload fontSize={48} className="mx-auto" />
                                <input {...getInputProps()} />
                                {isDragActive ?
                                        <p>Drop the files here ...</p> :
                                        <p className="text-lg">
                                            <button className="text-[#20215A] font-bold mr-1">
                                                Click to upload
                                            </button>
                                            or drag and drop your product image here <br />
                                            400x400px image recommended (.png or .jpg). (20MB maximum file size)
                                        </p>
                                }
                            </div>
                        </div>
                    }
                </div>

                <div className="mb-10">
                    <div className="flex gap-4">
                        <label className="text-lg cursor-pointer">
                            <input
                                type={"radio"}
                                checked={!product.isFree}
                                onChange={e => { setProduct({ ...product, isFree: false }) }}
                            />
                            <span className="ml-1">
                                Fixed price
                            </span>
                        </label>
                        <label className="text-lg cursor-pointer">
                            <input
                                type={"radio"}
                                checked={product.isFree}
                                onChange={e => { setProduct({ ...product, isFree: true }) }}
                            />
                            <span className="ml-1">
                                Free
                            </span>
                        </label>
                    </div>

                    {!product.isFree &&
                        <div className="mb-10">
                            <div className="mb-2 mt-6">Amount</div>
                            <TextInput
                                placeholder={"NGN"}
                                fullWidth={true}
                                value={product.price}
                                onValueChange={e => { setProduct({ ...product, price: e.target.value }) }} />
                        </div>
                    }
                </div>

                <div className="mb-10">
                    <div className="mb-2">Shareable link</div>
                    <div className="flex items-center gap-2">
                        <div className="text-[#20215A] font-bold mr-1">
                            {window.location.origin}/buy/username/
                        </div>
                        <TextInput
                            placeholder={"slug"}
                            value={product.slug}
                            onValueChange={e => { setProduct({ ...product, slug: e.target.value }) }}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <div>
                        <PrimaryButton text="Add product" onCLickFunction={() => { console.log(product); addProduct() }} />
                    </div>
                </div>
            </div>
            <Modal
                isOpen={finishModalOpen}
                onRequestClose={() => { setFinishModal(false) }}
                style={customStyles}
            >
                <div className="w-full flex gap-x-96 items-center py-6 px-10">
                    <div className="text-2xl font-semibold text-[#20215A]">New Product Added!</div>
                    <div className="flex items-center">
                        <a href={`${window.location.origin}/buy/${getUserName()}/${product.slug}`} target="_" >
                            <button className="btn-outline btn flex gap-2">
                                View <AiFillEye />
                            </button>
                        </a>
                        <button onClick={() => { setFinishModal(false) }} className="text-[#20215A] ml-40">
                            <IoMdClose fontSize={32} fontWeight="bold" />
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}