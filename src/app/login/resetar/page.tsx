import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Resetar a senha',
    description: 'Resete sua senha.'
}

export default async function ResetarPage(){
    return (
        <main>
            <h1>Resetar</h1>
        </main>
    )
}