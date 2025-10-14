import Layout from '@/components/Layout';
import { Card } from '@/components/ui/Card';
import { ContentCard } from '@/components/ui/ContentCard';
import { Heading } from '@/components/ui/Heading';
import { TaskList } from '@/components/ui/TaskList';
import { PageProps, Paginated, Task } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Index() {
    const { tasks, filters, percentages, latestTasks } = usePage<
        PageProps<{
            tasks: Paginated<Task>;
            filters: { status?: string };
            percentages: { pendente: number; em_andamento: number; concluida: number };
            latestTasks: Task[];
        }>
    >().props;

    const FilterUrl = (status?: string) => {
        return status ? `/tasks?status=${status}` : '/tasks';
    };

    return (
        <>
            <Layout>
                <Head title="Dashboard de Tarefas" />
                <div className="min-h-screen p-8">
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <ContentCard title="Pendentes" value={`${percentages.pendente.toFixed(1)}%`} description="Tarefas aguardando início" />
                            <ContentCard
                                title="Em Andamento"
                                value={`${percentages.em_andamento.toFixed(1)}%`}
                                description="Tarefas sendo executadas"
                            />
                            <ContentCard title="Concluídas" value={`${percentages.concluida.toFixed(1)}%`} description="Tarefas finalizadas" />

                            <Card>
                                <h3 className="text-sm text-gray-400">Adicionadas Recentemente</h3>
                                <div className="mt-4 space-y-3">
                                    {latestTasks.length > 0 ? (
                                        latestTasks.map((task) => (
                                            <div key={task.id} className="flex items-center justify-between text-xs text-gray-300">
                                                <p className="truncate pr-2">{task.title}</p>
                                                <span className="flex-shrink-0 text-gray-500">
                                                    {new Date(task.created_at).toLocaleDateString('pt-BR')}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-xs text-gray-500">Nenhuma tarefa recente.</p>
                                    )}
                                </div>
                            </Card>
                        </div>

                        <Card>
                            <div className="mb-6 flex items-center justify-between">
                                <Heading>Minhas Tarefas</Heading>
                                <Link href="/tasks/create" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-bold hover:bg-sky-700">
                                    Nova Tarefa
                                </Link>
                            </div>

                            <div className="mb-4 flex space-x-4 border-b border-gray-700">
                                {[
                                    { label: 'Todas', status: undefined },
                                    { label: 'Pendentes', status: 'pendente' },
                                    { label: 'Em Andamento', status: 'em andamento' },
                                    { label: 'Concluídas', status: 'concluida' },
                                ].map((item) => (
                                    <Link
                                        key={item.label}
                                        href={FilterUrl(item.status)}
                                        className={`px-1 py-2 text-sm transition-colors duration-200 ${filters.status === item.status ? 'border-b-2 border-sky-400 text-sky-400' : 'border-b-2 border-transparent text-gray-400 hover:text-white'}`}
                                        preserveState
                                        preserveScroll
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <TaskList tasks={tasks} />

                            <div className="mt-6 flex justify-center space-x-2">
                                {tasks.links.map((link, index) =>
                                    link.url ? (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className={`rounded-lg border px-4 py-2 text-sm transition-colors ${link.active ? 'border-sky-600 bg-sky-600 text-white' : 'border-gray-700 bg-gray-800 hover:bg-gray-700'}`}
                                        />
                                    ) : (
                                        <span
                                            key={index}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                            className="rounded-lg border border-gray-700/50 bg-gray-800/50 px-4 py-2 text-sm text-gray-500"
                                        />
                                    ),
                                )}
                            </div>
                        </Card>
                    </div>
                </div>
            </Layout>
        </>
    );
}
