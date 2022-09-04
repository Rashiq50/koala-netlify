import { createContext, useEffect, useState } from "react"

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const initialState = {
        loggedIn: false,
        user: JSON.parse(localStorage.getItem('user')) || null,
        products: [
            {
                id:1,
                name: "Product on state",
                price: 200.00,
                description: "Description here",
                coverImage: "https://picsum.photos/200/300?random=1",
                isFree: false,
                type: 'url',
                redirectUrl: "https://www.google.com",
                files: [],
                coverImageFile: null,
                slug: "state-product",
                earning: 0.00,
                pageView: 0,
                sales: 0,
                user:{
                    name:"Rashiq Rahman",
                    username:"rashiq50",
                    id:1,
                }
            },
        ],
        paymentLinks:[
            {
                id:1,
                title:"test title",
                buy:"",
                description:"",
                amount:200.00,
                link:"",
                earning: 0.00,
                pageView: 0,
                sales: 0,
                user:{
                    name:"Rashiq Rahman",
                    username:"rashiq50",
                    id:1,
                }
            }
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
