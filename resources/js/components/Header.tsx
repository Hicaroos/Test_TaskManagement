import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function Header() {
    const { auth } = usePage<PageProps>().props;

    return (
        <header className="bg-gray-900/50 p-4 text-white shadow-lg backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/tasks" className="text-xl font-bold">
                    Gerenciador de Tarefas
                </Link>

                {auth.user && (
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="rounded-lg bg-gray-600 px-3 py-1 text-sm font-bold transition-colors hover:bg-gray-700"
                    >
                        Logout
                    </Link>
                )}
            </div>
        </header>
    );
}
