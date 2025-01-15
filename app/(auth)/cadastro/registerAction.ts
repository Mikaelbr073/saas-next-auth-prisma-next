'use server'
import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
export default async function RegisterAction(_prevState: any, formData: FormData) {

    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        email: string,
        name: string,
        password: string

    };

    if (!data.name || !data.email || !data.password) {
        return {
            mensage: 'Preencha todos os campos',
            success: false
        }
    }

    // Verificar sem o usuário já ta na base de dados
    const user = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (user) {
        return {
            mensage: 'Esse E-mail já foi cadastrado',
            success: false
        }
    }

    // Criar o usuário 
    await db.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashSync(data.password)
        }
    })


    return {
        mensage: 'Cadastro Realizado com sucesso',
        success: true
    }





}