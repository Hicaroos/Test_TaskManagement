import Layout from '@/components/Layout';
import { Container } from '@/components/ui/Container';
import { DefaultButton } from '@/components/ui/DefaultButton';
import { Heading } from '@/components/ui/Heading';
import { Input } from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import React from 'react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/register');
    }

    return (
        <>
            <Layout>
                <Container>
                    <form onSubmit={handleSubmit} className="m-10 flex h-80 flex-col items-center justify-center gap-6 p-4">
                        <div className="flex flex-col gap-2 text-center">
                            <Heading>Crie uma conta</Heading>
                            <p className="text-sm italic">Insira seus dados abaixo para criar sua conta</p>
                        </div>

                        <Input type="text" name="name" placeholder="Nome" value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                        {errors.name && <div className="text-sm text-red-500">{errors.name}</div>}

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

                        <Input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confime a senha"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        ></Input>
                        <DefaultButton type="submit" disabled={processing}>
                            {processing ? 'Cadastrando...' : 'Cadastrar'}
                        </DefaultButton>
                        <div className="text-sm">
                            <p>
                                Já tem uma conta?
                                <a href="/login" className="pl-2 underline">
                                    Entrar
                                </a>
                            </p>
                        </div>
                    </form>
                </Container>
            </Layout>
        </>
    );
}
