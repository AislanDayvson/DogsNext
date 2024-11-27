'use client'

import { useFormState, useFormStatus } from "react-dom"
import Button from "@/components/forms/button"
import Input from "@/components/forms/input"
import ErrorMessage from "../helper/error-message"
import { useEffect } from "react"
import styles from './login-form.module.css'
import passwordLost from "@/actions/password-lost"

function FormButton(){
    const {pending} = useFormStatus()
    return (
        <>
        {pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Enviar e-mail</Button>}
        </>
    )
}

export default function LoginPerdeuForm(){

    const [state, action] = useFormState(passwordLost, {
        ok: false,
        erro: '',
        data: null,
    })

    return (
        <>
            <form className={styles.form} action={action}>
                <Input label="Email / Usuário" name='login' type="text" />
                <input type="hidden" name="url" value={`${window.location.href.replace('perdeu', 'resetar')}`} />
                {state.ok ? <p style={{color: '#4c1'}}>Email enviado</p> :  <FormButton/>}
                <ErrorMessage error={state.erro} />
               
            </form>
        </>
    )
}