<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UploadController extends Controller
{
    public function index () 
    {
        return Inertia::render('Upload');
    }
    
    public function store(Request $request){
        $request->validate([
            'file' => ['required', 'file', 'max:1024'],
        ]);//ファイルがアップロードされたかのバリデーション

        $file_name = $request->file('file')->getClientOriginalName();//元のファイル名を取得
        $request->file('file')->storeAs('public',$file_name);//アップロードされたファイルを保存
        return Inertia::render('Upload',['imageSrc' => '/storage/'.$file_name]);//ファイルパスを返す
    }
}
