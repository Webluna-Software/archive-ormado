import  { createContext} from 'react'

export const ApiLinkContext = createContext()

export const ApiLinkProvider = (props) => {

    const ApiLink = "https://ormadoapi.webluna.org/api";
    // Esas link asagidaki olacaq
    const ApiLink2 = "https://ormadoapi.webluna.org/api";

//Social Media Links
    const ApiLink3 ="https://ormadoapi.webluna.org/api"

    return (

        <ApiLinkContext.Provider value={{ApiLink,ApiLink2,ApiLink3}} >
            {props.children}
        </ApiLinkContext.Provider>
        
    )
}

export default ApiLinkContext;