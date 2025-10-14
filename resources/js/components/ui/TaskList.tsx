import React from 'react';
import { Link, router } from '@inertiajs/react';
import { Paginated, Task } from '@/types';

type TaskListProps = {
  tasks: Paginated<Task>;
};

export function TaskList({ tasks }: TaskListProps) {
   const handleDeleteClick = (task: Task) => {
        if (window.confirm(`Tem certeza que deseja excluir a tarefa: "${task.title}"?`)) {
      router.delete(`/tasks/${task.id}`);
    }
   }
  return (
    <div className="space-y-3">
      {tasks.data.length > 0 ? (
        tasks.data.map((task) => (
          <div key={task.id} className="bg-gray-800/50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-white">{task.title}</h4>
              <p className="text-sm text-gray-400">{task.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  task.status === 'pendente'
                    ? 'bg-yellow-500/20 text-yellow-300'
                    : task.status === 'em andamento'
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'bg-green-500/20 text-green-300'
                }`}
              >
                {task.status}
              </span>
              <Link href={`/tasks/${task.id}/edit`} className="text-sky-400 hover:text-sky-300">
                Editar
              </Link>
              <button
                onClick={() => handleDeleteClick(task)}
                className="text-red-500 hover:text-red-400"
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-8">Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}
