import React from "react";
import { BiWallet } from "react-icons/bi";
import NoContent from "../../Common/noContent";
import PrimaryButton from "../../Common/PrimaryButton";


export default function Transfers(){
    return (
        <div className="container mx-auto p-10">
            <div className="">
                <div className="text-2xl">Transfers</div>
                <div>Send money to your favourite creators on Fidia using their usernames</div>
            </div>

            <div className="grid grid-cols-3 mt-10">
                <div className="col-span-1 px-6 py-10 shadow-md rounded">
                    <div className="flex gap-4 items-center">
                        <div className="bg-gray-200 p-2 flex items-center justify-center rounded-[50%]">
                            <BiWallet fontSize={"36px"} />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="text-sm">Available Balance</div>
                            <div className="text-lg  text-gray-500 font-medium" > NGN {0} </div>
                        </div>
                        <PrimaryButton text="Send Money"  />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="text-xl my-2 text-gray-600 font-semibold"> Transaction </div>
                <div className="p-8 shadow">
                    <NoContent
                        variant={"link2"}
                        topText={"Your transaction history is currently empty!"}
                        bottomText={"Once you send or receive money, it will start showing here."}
                    />
                </div>
            </div>
        </div>
    )
}