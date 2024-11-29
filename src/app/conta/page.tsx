'use client'

import { useUser } from "@/context/user-context"


export default async function ContaPage(){
    const {user} = useUser()

    console.log(user)
    return(
        <main>
            <h1 onClick={() => console.log('Clicou')}>Conta: {user?.nome}</h1>
        </main>
    )
}