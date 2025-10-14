import { Container } from '@/components/ui/Conteiner';
import { DefaultButton } from '@/components/ui/DefaltButton';
import { Heading } from '@/components/ui/Heading';
import { Input } from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import React from 'react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/login');
    }

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit} className="m-10 flex h-80 flex-col items-center justify-center gap-10 p-4">
                    <div className="flex flex-col gap-2 text-center">
                        <Heading>Entre na sua conta</Heading>
                        <p className="text-sm italic">Digite seu e-mail e senha abaixo para fazer login</p>
                    </div>

                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    ></Input>
                    {errors.email && <div className="text-sm text-red-500">{errors.email}</div>}

                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    ></Input>
                    {errors.password && <div className="text-sm text-red-500">{errors.password}</div>}

                    <div className='flex flex-col gap-4 text-center'>
                        <DefaultButton type="submit" disabled={processing}>
                            {processing ? 'Entrando...' : 'Entrar'}
                        </DefaultButton>
                        <div className="text-sm">
                            <p>
                                Não tem uma conta?
                                <a href="/register" className="underline pl-2">
                                    Cadastre-se
                                </a>
                            </p>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    );
}
