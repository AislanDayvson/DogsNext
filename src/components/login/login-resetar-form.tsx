'use client'

import { useFormState, useFormStatus } from "react-dom"
import Button from "@/components/forms/button"
import Input from "@/components/forms/input"
import ErrorMessage from "../helper/error-message"
import styles from './login-form.module.css'
import passwordReset from "@/actions/password-reset"

function FormButton(){
    const {pending} = useFormStatus()
    return (
        <>
        {pending ? <Button disabled={pending}>Resetando...</Button> : <Button>Resetar senha</Button>}
        </>
    )
}

export default function LoginResetarForm({keyToken, login}: {login: string; keyToken: string}){

    const [state, action] = useFormState(passwordReset, {
        ok: false,
        erro: '',
        data: null,
    })

    return (
        <>
            <form className={styles.form} action={action}>
                <Input label="Nova senha" name='password' type="password" /> 
                <input type="hidden" name="login" value={login} />
                <input type="hidden" name="key" value={keyToken} />   
                <ErrorMessage error={state.erro} />
                <FormButton />
            </form>
        </>
    )
}