
import React, { createContext} from 'react'

export const ApiLinkContext = createContext()

export const ApiLinkProvider = (props) => {

    const ApiLink = "https://ormadoapi.webluna.org/api/client";


    return (

        <ApiLinkContext.Provider value={{ApiLink}} >
            {props.children}
        </ApiLinkContext.Provider>
        
    )
}

export default ApiLinkContext;