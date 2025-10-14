import { Task } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import React from 'react';
import { DefaultButton } from './ui/DefaultButton';
import { Heading } from './ui/Heading';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

type TaskFormProps = {
    task?: Task;
};

export function TaskForm({ task }: TaskFormProps) {
    const { data, setData, processing, errors, post, put } = useForm({
        title: task?.title || '',
        description: task?.description || '',
        status: task?.status || 'pendente',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (task) {
            put(`/tasks/${task.id}`);
        } else {
            post('/tasks');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 p-4">
                <Heading>{task ? 'Editar Tarefa' : 'Criar Tarefa'}</Heading>

                <Input type="text" name="title" placeholder="Título" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                {errors.title && <div className="mt-1 text-sm text-red-500">{errors.title}</div>}

                <Textarea
                    name="description"
                    placeholder="Descrição"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    required
                ></Textarea>
                {errors.description && <div className="text-sm text-red-500">{errors.description}</div>}

                {task && (
                    <div>
                        <label htmlFor="status" className="sr-only">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value as Task['status'])}
                            className="w-full rounded-md bg-gray-900/50"
                        >
                            <option value="pendente">Pendente</option>
                            <option value="em andamento">Em Andamento</option>
                            <option value="concluida">Concluída</option>
                        </select>
                    </div>
                )}

                <div className="flex flex-col items-center gap-4">
                    <DefaultButton type="submit" disabled={processing}>
                        {processing ? (task ? 'Salvando...' : 'Criando...') : task ? 'Salvar Alterações' : 'Criar Tarefa'}
                    </DefaultButton>
                    <Link href="/tasks" className="text-sm text-gray-400 hover:text-white">
                        Cancelar
                    </Link>
                </div>
            </form>
        </>
    );
}
