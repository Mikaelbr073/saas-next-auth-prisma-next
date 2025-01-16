'use server'

import { signIn } from "@/auth"
import { isRedirectError } from "next/dist/client/components/redirect"

export default async function LoginAction(_preveState: any ,formData: FormData) {
    try {
        await signIn('credentials', {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            redirect: true,
            redirectTo: '/dashboard'
        })
        return { success: true }
    } catch (e: any) {

        if(isRedirectError(e)){
            throw e;
        }

        console.error(e);
        if (e.type === "CredentialsSignin") {
            return { success: false, mensage: 'Dados de login incorretos.' }
        }

        return { success: false, mensage: 'Opss, algum erro aconteceu.' }
    }
}