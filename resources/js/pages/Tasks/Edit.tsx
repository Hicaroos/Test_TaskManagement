import Layout from '@/components/Layout';
import { TaskForm } from '@/components/TaskForm';
import { Container } from '@/components/ui/Container';
import { PageProps, Task } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Edit() {
    const { task } = usePage<PageProps<{ task: Task }>>().props;

    return (
        <>
            <Layout>
                <Head title={`Editar: ${task.title}`} />
                <Container>
                    <TaskForm task={task} />
                </Container>
            </Layout>
        </>
    );
}
