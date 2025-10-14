<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;
use App\Http\Requests\TaskRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class TaskController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();

        $allTasks = $user->tasks()->get();

        $countTasks = $allTasks->count();

        $percentages = [
            'pendente' => $countTasks > 0 ? round(($allTasks->where('status', 'pendente')->count() / $countTasks) * 100, 1) : 0,
            'em_andamento' => $countTasks > 0 ? round(($allTasks->where('status', 'em andamento')->count() / $countTasks) * 100, 1) : 0,
            'concluida' => $countTasks > 0 ? round(($allTasks->where('status', 'concluida')->count() / $countTasks) * 100, 1) : 0,
        ];

        $latestTasks = $allTasks->sortByDesc('created_at')->take(5)->values()->all();

        $tasksQuery = $user->tasks()->latest();

        if ($request->has('status') && in_array($request->status, ['pendente', 'em andamento', 'concluida'])) {
            $tasksQuery->where('status', $request->status);
        }

        $tasks = $tasksQuery->paginate(10)->withQueryString();

        $filters = $request->only('status');

        return Inertia::render(
            'Tasks/Index',
            compact('tasks', 'filters', 'percentages', 'latestTasks')
        );
    }

    public function create()
    {
        return Inertia::render('Tasks/Create');
    }

    public function store(TaskRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = Auth::id();
        Task::create($validated);
        return redirect()->route('tasks.index');
    }

    public function show(Task $task)
    {
        $this->authorize('view', $task);
        return Inertia::render('Tasks/Show', compact('task'));
    }

    public function edit(Task $task)
    {
        $this->authorize('update', $task);
        return Inertia::render('Tasks/Edit', compact('task'));
    }

    public function update(TaskRequest $request, Task $task)
    {
        $this->authorize('update', $task);

        $validated = $request->validated();
        $task->update($validated);
        return redirect()->route('tasks.index');
    }

    public function destroy(Task $task)
    {
        $this->authorize('delete', $task);
        $task->delete();
        return redirect()->route('tasks.index');
    }
}
