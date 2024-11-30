import ContaPhotoPost from "@/components/conta/conta-photo.post"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Postar | Minha Conta',
    description: ''
}

export const runtime = 'edge';

export default async function PostarPage(){
    return (
        <main>
            <ContaPhotoPost />
        </main>
    )
}