import React, { createContext, useEffect, useState } from "react";
export const store = createContext();

const Data = (props) => {

    const [data, setData] = useState([])

    useEffect (()=>{
        async function Backend () {
            let content=await fetch("https://nrx-react-backend-project.herokuapp.com/")
            content= await content.json()
            console.log(content);
            setData(content)
        }
        Backend()
    },[])

       
    return (
        <>
        <store.Provider value={[data, setData]}>
            {props.children}
        </store.Provider>

        </>
    )

}

export default Data;