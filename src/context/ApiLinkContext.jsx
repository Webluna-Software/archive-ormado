import  { createContext} from 'react'

export const ApiLinkContext = createContext()

export const ApiLinkProvider = (props) => {

    const ApiLink = "https://ormadoapi.webluna.org/api/client";
    
    // Esas link asagidaki olacaq
    const ApiLink2 = "https://demo-api-ormado.webluna.org/api";

    return (

        <ApiLinkContext.Provider value={{ApiLink,ApiLink2}} >
            {props.children}
        </ApiLinkContext.Provider>
        
    )
}

export default ApiLinkContext;