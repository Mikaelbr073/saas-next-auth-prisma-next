'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Form from 'next/form';
import LoginAction from './login-action';
import { useActionState } from 'react';
export default function LoginForm() {
    const [state, FormAction, isPending] = useActionState(LoginAction, null)
    
    return <>
        {state?.success === false && (
            <span className='text-red-600'>
                {state?.mensage}
            </span>
        )}
        <Form action={FormAction}>
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
                    Login
                </Button>
            </div>
        </Form>
    </>
}