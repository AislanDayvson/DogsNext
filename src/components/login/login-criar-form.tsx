'use client'

import { useFormState, useFormStatus } from "react-dom"
import Button from "@/components/forms/button"
import Input from "@/components/forms/input"
import ErrorMessage from "../helper/error-message"
import { useEffect } from "react"
import styles from './login-form.module.css'
import userPost from "@/actions/user-post"

function FormButton(){
    const {pending} = useFormStatus()
    return (
        <>
        {pending ? <Button disabled={pending}>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        </>
    )
}

export default function LoginCriarForm(){

    const [state, action] = useFormState(userPost, {
        ok: false,
        erro: '',
        data: null,
    })

    useEffect(() => {
        if(state.ok) window.location.href = '/conta'
    }, [state.ok])

    return (
        <>
            <form className={styles.form} action={action}>
                <Input label="Usuário" name='username' type="text" />
                <Input label="Email" name="email" type="text"/>
                <Input label="Senha" name='password' type="password"/>
                <ErrorMessage error={state.erro} />
                <FormButton/>
            </form>
        </>
    )
}