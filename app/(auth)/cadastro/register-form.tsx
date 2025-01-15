'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Form from 'next/form';
import RegisterAction from './registerAction';
import { useActionState } from 'react';
import { Button } from '@/components/ui/button';

export default function RegisterForm() {
    
    const [state, FormAction, isPending] = useActionState(RegisterAction, null)

    return <>
        {state?.success === false && (
        <span className='text-red-600'>
            {state?.mensage}
        </span>    
        )}
        <Form action={FormAction}>
            <div>
                <Label>Nome</Label>
                <Input type="text" name="name" placeholder="Fulano de Tal" />
            </div>
            <div>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="eu@exemplo.com" />
            </div>
            <div>
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="********" />
            </div>
            <div>
                <Button className="w-full mt-6" type="submit">
                    Registrar
                </Button>
            </div>
        </Form>
    </>
}