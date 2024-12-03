'use server'

import { GET_STATS } from "@/functions/api";
import apiError from "@/functions/apiErro";
import { cookies } from "next/headers";

export type StatsData = {
    id: number;
    title: string;
    acessos: string;
}

export default async function statsGet(){
    try{
        const token = cookies().get('token')?.value
        if(!token) throw new Error('Acesso negado')
        const {url} = GET_STATS()
        const response = await fetch(url, {
                headers: {
                    Authorization: 'Bearer' + token,
                  },
                  next: {
                    revalidate: 60,
                  }
        })
        const data = await response.json() as StatsData[]
        if(!response.ok) throw new Error('Erro ao buscar os dados')
        return {data, ok: true, erro: ''}
    } catch (err){
        return apiError(err)
    }
   
}