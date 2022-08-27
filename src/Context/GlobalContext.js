import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const initialState = {
        loggedIn: false,
        user: JSON.parse(localStorage.getItem('user')) || {name:"Rashiq Rahman", username:"rashiq50"},
        products: [
            {
                id:1,
                name: "Product on state",
                price: 200.00,
                description: "Description here",
                coverImage: "https://picsum.photos/200/300?random=1"
            },
        ]
    }

    const localState = localStorage.getItem('globalState');
    const [state, setState] = useState(localState ? JSON.parse(localState) : initialState);

    useEffect(() => {
        if(state !== initialState){
            localStorage.setItem("globalState", JSON.stringify(state));
        }
    }, [state])
    
    return (
        <GlobalContext.Provider value={[state, setState]}>
            {props.children}
        </GlobalContext.Provider>
    )
}
