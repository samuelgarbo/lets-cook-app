import React, {createContext, useState} from 'react';

export const AuthContext = createContext()

export function AuthProvider(props){
    const [auth, setAuth] = useState(true);
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}