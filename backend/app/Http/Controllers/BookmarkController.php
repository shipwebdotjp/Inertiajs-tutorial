<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookmarkController extends Controller
{
    private $bookmarks = [
        [
            'title' => 'SOHO MIND',
            'url' => 'https://blog.shipweb.jp/',
        ],
        [
            'title' => 'Youtube Checker',
            'url' => 'https://ytc.shipweb.jp/',
        ],
    ];
    //    
    public function index () 
    {


        return Inertia::render('Bookmark/Index',['bookmarks' => $this->bookmarks]);
    }
    
    //検索メソッド
    public function search ($queryWord) 
    {

        $queriedBookmarks = [];
        foreach($this->bookmarks as $bookmark){
            if(strpos($bookmark['title'],$queryWord) !== false || strpos($bookmark['url'],$queryWord) !== false ){
                $queriedBookmarks[] = $bookmark;
            }
        }
        return Inertia::render('Bookmark/Index',['bookmarks' => $queriedBookmarks]);

    }

    //追加メソッド
    public function store (Request $request) 
    {

        $this->bookmarks[] = [
            'title' => $request->title,
            'url' => $request->url,
        ];
        return Inertia::render('Bookmark/Index',['bookmarks' => $this->bookmarks]);

    }
    

    
}
