'use server'

import { TOKEN_POST, USER_POST } from "@/functions/api"
import apiError from "@/functions/apiErro"
import { cookies } from "next/headers"
import login from "./login"

export default async function userPost(state: {}, formData: FormData){
    const username = formData.get('username') as string | null
    const password = formData.get('password') as string | null
    const email = formData.get('email') as string | null

    try{
        if(!username || !email || !password) throw new Error('Preencha os dados.')
        if(password.length < 6) throw new Error('A senha deve ter mais de 6 dígitos')
        const {url} = USER_POST()
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        })
        if(!response.ok) throw new Error('E-mail ou usuário já cadastrado')
        const data = await response.json()
        const {ok} = await login({ok: true, erro: ''}, formData)
        if(!ok) throw new Error('Erro ao logar.')
        return {data: null, ok: true, erro: ''}
 } catch(error: unknown){
   return apiError(error)
 }
}