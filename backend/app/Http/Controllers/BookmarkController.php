<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookmarkController extends Controller
{
    //    
    public function index () 
    {
        $bookmarks = [
            [
                'title' => 'SOHO MIND',
                'url' => 'https://blog.shipweb.jp/',
            ],
            [
                'title' => 'Youtube Checker',
                'url' => 'https://ytc.shipweb.jp/',
            ],
        ];

        return Inertia::render('Bookmark/Index',['bookmarks' => $bookmarks]);
    }
}
