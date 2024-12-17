
import  { createContext} from 'react'

export const ApiLinkContext = createContext()

export const ApiLinkProvider = (props) => {

    const ApiLink = "https://ormadoapi.webluna.org/api";
    const ApiLink2 = "https://ormadoapi.webluna.org/api";

    return (

        <ApiLinkContext.Provider value={{ApiLink,ApiLink2}} >
            {props.children}
        </ApiLinkContext.Provider>
        
    )
}

export default ApiLinkContext;