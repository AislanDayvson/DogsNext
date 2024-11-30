'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function Logout(){
    cookies().delete('token')
}