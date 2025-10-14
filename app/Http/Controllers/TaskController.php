<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;
use App\Http\Requests\TaskRequest;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        return Inertia::render('Tasks/Index');
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
        return Inertia::render('Tasks/Index');
    }

    public function show(Task $task)
    {

    }

    public function edit(Task $task)
    {
        return Inertia::render('Tasks/Edit',compact('task'));
    }

    public function update(TaskRequest $request, Task $task)
    {
        $validated = $request->validated();
        $task->update($validated);
        return redirect()->route('tasks.index')->with('success', 'Tarefa atualizada com sucesso');
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return redirect()->route('tasks.index')->with('success', 'Tarefa deletada com sucesso');
    }
}
