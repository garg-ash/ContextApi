import { createContext, useContext, useState } from "react";

export const IncreContext = createContext()

export const IncreContextProvider  = ({children})=>{

  const [data,setData] = useState(0)

    const incre = ()=>{

     setData(data + 1)
    }


    return(

        <>
        <button></button>
        <IncreContext.Provider  value={{data, incre}}>
            {children}
        </IncreContext.Provider>
        </>
    )

}