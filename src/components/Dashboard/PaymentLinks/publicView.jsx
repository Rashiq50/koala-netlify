import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import AvatarPlaceHolder from "../../Common/AvataPlaceHolder";
import PrimaryButton from "../../Common/PrimaryButton";

export default function PublicView() {
    const [link, setLink] = useState();
    const [amount, setAmount] = useState(1);
    const [customAmount, setCustomAmount] = useState(false);
    const [price, setPrice] = useState(200);
    const [total, setTotal] = useState(200);
    const [type, setType] = useState("single");

    const [state, setState] = useContext(GlobalContext);

    useEffect(() => {
        const splittedPath = window.location.pathname.split('/');
        const linkSlug = splittedPath[splittedPath.length - 1];
        const linkIndex = state.paymentLinks.findIndex(el => el.link === linkSlug);
        setLink(state.paymentLinks[linkIndex]);
        setPrice(state.paymentLinks[linkIndex].amount);
        console.log(state.paymentLinks[linkIndex]);
    }, [])
    // router = useRo

    const handleCustomAmount = (e) => {
        e.target.checked &&
        setPrice("");

        !e.target.checked&&
        setPrice(link.amount)
        
        setCustomAmount(!customAmount);
    }

    useEffect(() => {
        const total = parseInt(amount) * parseInt(price);
        setTotal(total);
    }, [amount, price])

    return (
        <div className="h-screen w-screen">
            <div className="h-[40vh] bg-blue-50 flex relative justify-center">
                <div className="absolute top-20 rounded border shadow py-4 px-8 bg-white w-[40vw]">
                    <div className="flex items-start gap-x-8">
                        <AvatarPlaceHolder w={"w-20"} user={state.user} />
                        <div>
                            <div className="text-2xl font-semibold">
                                {link?.title}
                            </div>
                            <div className="text-xl capitalize">
                                By {link?.user.name}
                            </div>
                            <div className="">
                                {link?.description || "Aenean sit amet lacus mi. Pellentesque sed dictum odio, et interdum magna. Praesent vehicula nibh sagittis sapien imperdiet, sit amet feugiat enim tincidunt."}
                            </div>
                        </div>
                    </div>

                    <div className="text-2xl font-medium mt-10">
                        Buy <span> {link?.user.name.split(' ')[0]}</span> a {link?.buy}
                    </div>

                    <div className="flex justify-between items-center mt-10">
                        <div className="text-2xl flex items-center gap-4">
                            <div className="bg-gray-200 rounded-lg w-20 h-20" ></div>
                            NGN {link?.amount} Each
                        </div>
                        <div className="flex border rounded">
                            <button onClick={() => { amount >= 2 && setAmount(amount - 1) }} className="bg-gray-300 p-2 w-10 rounded"> - </button>
                            <input type=""
                                value={amount}
                                onChange={e => { !isNaN(e.target.value) && setAmount(e.target.value) }}
                                className="border-0 text-center outline-none p-2 w-10" />
                            <button onClick={() => { setAmount(amount + 1) }} className="bg-gray-300 p-2 w-10 rounded"> + </button>
                        </div>
                    </div>

                    <div className="flex w-full my-8 bg-gray-100 rounded-[24px] text-2xl">
                        <button onClick={() => setType("single")} className={`w-1/2 py-2 rounded-[24px] ${type === 'single' && "btn-primary text-white"} `}> One-time </button>
                        <button onClick={() => setType("monthly")} className={`w-1/2 py-2 rounded-[24px] ${type === 'monthly' && "btn-primary text-white"}`}> Monthly </button>
                    </div>

                    <div>
                        <div className="my-2">
                            <div>Name</div>
                            <input className="border-0 outline-none w-full bg-gray-50 p-3 h-14" placeholder="John Doe" />
                        </div>
                        <div className="my-2">
                            <div>Email</div>
                            <input className="border-0 outline-none w-full bg-gray-50 p-3 h-14" placeholder="john@email.com" />
                        </div>
                        <div className="my-2">
                            <div>Message</div>
                            <textarea rows="3" className="border-0 outline-none w-full bg-gray-50 p-3" placeholder="Leave some kind words" />
                        </div>
                        <div className="my-2">
                            <label className="cursor-pointer">
                                <input checked={customAmount} onChange={handleCustomAmount} type="checkbox" className="mr-2" />
                                Enter Custom Amount
                            </label>
                        </div>
                        {customAmount &&
                            <div className="my-2">
                                <input
                                    value={price}
                                    onChange={e => { !isNaN(e.target.value) && setPrice(e.target.value) }}
                                    className="border-0 outline-none w-full bg-gray-50 p-3 h-14" placeholder={`How much would you like to pay?`} />
                            </div>
                        }
                    </div>
                    <div>
                        <PrimaryButton text={`Support - NGN ${total || ""} ${type === 'monthly' ? "/ Month" : ""}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}