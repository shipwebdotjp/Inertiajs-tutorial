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
        ]);

        $file_name = $request->file('file')->getClientOriginalName();
        $request->file('file')->storeAs('public',$file_name);
        return Inertia::render('Upload',['imageSrc' => '/storage/'.$file_name]);
    }
}
