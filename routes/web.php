<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\Auth\AuthController;

Route::get('/', function () {
        return redirect()->route('login');
    });

Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'Register']);
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'Login']);

Route::middleware('auth')->group(function () {
    Route::resource('tasks', TaskController::class);
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
