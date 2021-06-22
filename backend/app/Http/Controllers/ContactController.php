<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    //フォーム表示
    public function index () 
    {
        return Inertia::render('Contact/Index');
    }

    //確認表示
    public function confirm (Request $request) 
    {
        $request->validate([
            'mail' => ['required', 'email'],
            'message' => ['required', 'max:5000'],
        ]);
        return Inertia::render('Contact/Confirm',['mail'  => $request->mail, 'message'  => $request->message]);
    }

    //送信
    public function send (Request $request) 
    {
        $request->validate([
            'mail' => ['required', 'email'],
            'message' => ['required', 'max:5000'],
        ]);

        //問い合わせ内容を保存したりメールで送信する処理をここに記述

        return Inertia::render('Contact/Complete');
    }
}
