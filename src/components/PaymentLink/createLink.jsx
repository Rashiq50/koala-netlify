import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import PrimaryButton from "../Common/PrimaryButton";
import TextArea from "../Common/TextArea";
import TextInput from "../Common/TextInput";

export default function CreateNewLink({closeModal}) {
    const [state, setState] = useContext(GlobalContext);
    const initialState = {
        title: "",
        buy: "coffee",
        description: "",
        amount: 0.00,
        link: "",
        user: state.user,
        date: new Date(),
        id: Math.floor(Math.random() * (9999 - 1000) + 1000)
    }
    const [linkObject, setLinkObject] = useState(initialState);
    const [finishModalOpen, setFinishModal] = React.useState(false);

    const AddNewLink = () => {
        setState({ ...state, "paymentLinks": [...state.paymentLinks, {...linkObject,date: new Date()}] });
        setFinishModal(true);
        closeModal();
        setLinkObject({ ...initialState });
    }

    return (
        <div>
            <div className="flex flex-col gap-2 mb-6">
                <label> Title <span> ({`${linkObject.title.length}/25`}) </span> </label>
                <TextInput
                    value={linkObject.title}
                    onValueChange={e => setLinkObject({ ...linkObject, title: e.target.value })}
                    placeholder="Give this link a name"
                />
            </div>
            <div className="flex flex-col gap-2 mb-6">
                <label> What should your fans get you?</label>
                <select value={linkObject.buy} onChange={e => setLinkObject({ ...linkObject, buy: e.target.value })} className="input input-lg input-bordered">
                    <option value={"coffee"}> Coffee </option>
                </select>
            </div>

            <div className="flex flex-col gap-2 mb-6">
                <label> Description </label>
                <TextArea
                    value={linkObject.description}
                    onValueChange={e => setLinkObject({ ...linkObject, description: e.target.value })}
                    placeholder="What does this link receive payments for?"
                />
            </div>

            <div className="flex flex-col gap-2 mb-6">
                <label> Amount (NGN) </label>
                <TextInput
                    value={linkObject.amount}
                    onValueChange={e => setLinkObject({ ...linkObject, amount: e.target.value })}
                    placeholder="How much would you like to receive?"
                />
            </div>

            <div className="flex flex-col gap-2 mb-6">
                <label> Shareable link </label>
                <div className="w-full">
                    {`${window.location.origin}/pay/`}
                    <TextInput
                        value={linkObject.link}
                        onValueChange={e => setLinkObject({ ...linkObject, link: e.target.value })}
                        placeholder="example-name"
                    />
                </div>
            </div>

            <PrimaryButton text="Create Link" onCLickFunction={() => AddNewLink()} />
        </div>
    )
}