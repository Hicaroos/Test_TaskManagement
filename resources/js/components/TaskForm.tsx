import React from "react";
import { useForm } from "@inertiajs/react";
import { Input } from "./ui/Input";
import { DefaultButton } from "./ui/DefaltButton";
import { Textarea } from "./ui/Textarea";
import { Heading } from "./ui/Heading";

export function TaskForm(){
    const {data, setData, processing, errors, post} = useForm({
        title: '',
        description: '',
        status: 'pendente'
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();
            post('/tasks');
        }
    return (
        <>
        <form onSubmit={handleSubmit} className="h-80 flex flex-col gap-6 items-center justify-center p-4">
          <Heading>Criar tarefa</Heading>

            <Input
                type="text"
                name="title"
                placeholder="Titulo"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}>
            </Input>
            {errors.title && <div className="text-sm text-red-500">{errors.title}</div>}

            <Textarea 
                name="description" 
                placeholder="Descrição" 
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}>
            </Textarea>
                    {errors.description && <div className="text-sm text-red-500">{errors.description}</div>}

        <DefaultButton type="submit" disabled={processing}>{processing? 'Criando' : 'Criar'}</DefaultButton>
        </form>
        </>
    )
}