'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type User = {
    id: number;
    nome: string;
    username: string;
    email: string;
}

type IUserContext = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<IUserContext | null>(null)

export const useUser = () => {
    const context = useContext(UserContext)
    if(context === null) throw new Error('UseContext deve estar dentro do provider')
    return context
} 

export function UserContextProvider({children, user}: {children: ReactNode, user: User | null}){
    const [userState, setUser] = useState<User | null>(user)
    return <UserContext.Provider value={{user: userState, setUser}}>{children}</UserContext.Provider>
}