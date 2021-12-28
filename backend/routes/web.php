<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UploadController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/HelloWorld', function () {
    return Inertia::render('HelloWorld');
});

Route::get('/Bookmark',[App\Http\Controllers\BookmarkController::class, 'index'])->name('bookmark.index');
Route::get('/Bookmark/search/{queryWord}',[App\Http\Controllers\BookmarkController::class, 'search'])->where('queryWord', '.*')->name('bookmark.search');
Route::post('/Bookmark/store',[App\Http\Controllers\BookmarkController::class, 'store'])->name('bookmark.store');
Route::delete('/Bookmark/delete/{id}',[App\Http\Controllers\BookmarkController::class, 'destroy'])->name('bookmark.delete');
Route::resource('/Upload',UploadController::class);
Route::get('/Contact',[App\Http\Controllers\ContactController::class, 'index'])->name('contact.index');
Route::post('/Contact/confirm',[App\Http\Controllers\ContactController::class, 'confirm'])->name('contact.confirm');
Route::post('/Contact/send',[App\Http\Controllers\ContactController::class, 'send'])->name('contact.send');
