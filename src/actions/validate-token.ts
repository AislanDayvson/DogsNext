'use server'

import { GET_STATS, TOKEN_VALIDATE_POST } from "@/functions/api";
import apiError from "@/functions/apiErro";
import { cookies } from "next/headers";

export default async function validateToken(){
    try{
        const token = cookies().get('token')?.value
        if(!token) throw new Error('Acesso negado')
        const {url} = TOKEN_VALIDATE_POST()
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer' + token,
                  },
        })
        const data = await response.json()
        if(!response.ok) throw new Error('Erro ao validar token')
        return {data, ok: true, erro: ''}
    } catch (err){
        return apiError(err)
    }
   
}